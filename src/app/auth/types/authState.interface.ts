import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  isLoggedIn: boolean | null
  currentUser: CurrentUserInterface | null
  validationErrors: BackendErrorsInterface | null
}
