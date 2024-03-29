import { Component, OnInit } from '@angular/core';
import {GuardianService} from "../data-access/guardian.service";
import {first, map} from "rxjs";
import {Guardian} from "../data-access/interfaces/Guardian";
import {GuardianDisplay} from "../data-access/interfaces/GuardianDisplay";

@Component({
  selector: 'app-builder-dashboard',
  templateUrl: './builder-dashboard.component.html',
  styleUrls: ['./builder-dashboard.component.css'],
})
export class BuilderDashboardComponent implements OnInit {
  title = 'MirrorverseBuilder';
  guardianList: any;
  filteredGuardianList: any;
  searchByString: string = '';
  searchByClasses: string[] = ['melee', 'support', 'ranged', 'tank'];

  teamBuild: [Guardian?, Guardian?, Guardian?] = [
    undefined,
    undefined,
    undefined,
  ];

  constructor(private guardianService: GuardianService) {}

  ngOnInit() {
    //load list
    this.guardianService
      .getAllGuardians()
      .pipe(
        map((res) => {
          return res.guardians.map((obj: any) => {
            return {
              ...obj,
              id: !!obj.id.includes('_') ? obj.id.replace('_', '-') : obj.id,
              url: obj.url.slice(11, -1),
            };
          });
        }),
        first()
      )
      .subscribe({
        next: (data) => (
          (this.guardianList = data), (this.filteredGuardianList = data)
        ),
        error: (error) => console.error(error),
      });
  }

  addGuardianToBuilder(valueGuardianDisplay: GuardianDisplay) {
    this.guardianService
      .getGuardianById(valueGuardianDisplay.url)
      .pipe(
        map((res) => {
          return {
            ...res,
            id: res.id.includes('_') ? res.id.replace('_', '-') : res.id,
            talents: res.talents.map((obj: any) => {
              return {
                ...obj,
                selected: false,
              };
            }),
          };
        }),
        first()
      )
      .subscribe({
        next: (data) => this.addToTeamBuild(data),
        error: (error) => console.error(error),
      });
  }

  filterByString(string: string) {
    this.searchByString = string;
    this.filterGuardianList();
  }

  filterByClasses(classes: any) {
    this.searchByClasses = classes;
    this.filterGuardianList();
  }

  filterGuardianList() {
    this.filteredGuardianList = this.guardianList.filter(
      (g: Guardian) =>
        this.searchByClasses.includes(g.class.toLowerCase()) &&
        g.name.toLowerCase().includes(this.searchByString)
    );
  }

  addToTeamBuild(guardian: Guardian) {
    //find open spot
    let openSpot = this.teamBuild.findIndex((g) => g === undefined);

    //check if dupe & insert into array
    if (
      !this.teamBuild.some((g) => g !== undefined && g.id === guardian.id) &&
      openSpot >= 0
    ) {
      this.teamBuild[openSpot] = guardian;
    }
  }

  removeFromTeamBuild(valueArrayIndex: number) {
    //set to undefined
    this.teamBuild[valueArrayIndex] = undefined;
  }
}
