import {GuardianStats} from "./GuardianStats";
import {GuardianAbility} from "./GuardianAbility";
import {GuardianTalent} from "./GuardianTalent";

export interface Guardian {
  content: string
  featured_youtube_video: string
  id: string
  name: string
  class: string
  bio: string
  class_id: string
  stats: GuardianStats
  abilities: GuardianAbility[]
  talents: GuardianTalent[]
  banner: string
  legal: string
  lang: string
}
