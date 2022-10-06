import {Injectable} from "@angular/core";

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (errors) {
      console.error('Error saving to localStorage', errors)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (errors) {
      console.error('Error getting data from localStorage', errors)
      return null
    }
  }
}
