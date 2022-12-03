import { Continent } from "../models/continent"

export interface Country {
  name : string
  capital : string
  currency : string
  emoji : string
  phone : string
  continent : Continent
}
