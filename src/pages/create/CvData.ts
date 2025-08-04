export interface ProfileType {
  visible?: boolean
}

export interface ContactType {
  email: string,
  phone: string,
  location: string,
  linkedin: string,
  website: string
}

export interface LanguageType {
  name: string,
  level: 1 | 2 | 3 | 4 | 5,
  visible?: boolean; 
}

export interface DocumentType {
  origin: string,
  name: string,
  date: string,
  visible?: boolean
}

export interface ExperienceType {
  companyName: string,
  jobName: string,
  jobDate: string,
  jobExplanation: string,
  visible?: boolean
}

export interface EducationType {
  program: string,
  university: string,
  date: string,
  visible?: boolean
}

export interface SkillType {
  text: string,
  visible?: boolean
}

export interface CvDataType {
  firstName: string,
  jobTitle: string,
  profileText: string,
  contact: ContactType,
  languages: LanguageType[],
  documents: DocumentType[],
  experience: ExperienceType[],
  education: EducationType[],
  skills: SkillType[]
}

export type CategoryName = 'languages' | 'documents' | 'education' | 'skills' | 'experience';
export type CategoryTypes = LanguageType | DocumentType | EducationType | SkillType | ExperienceType | ProfileType;