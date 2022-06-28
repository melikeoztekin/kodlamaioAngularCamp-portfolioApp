import { Experience } from './experience';
import { SocialMedia } from './socialMedia';
export class User {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  country: string;
  city: string;
  preface: string;
  socialMedia: SocialMedia;
  experience: Experience[];
}
