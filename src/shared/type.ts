import { ReactNode } from "react";
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: ReactNode;
  title: string;
  des: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
