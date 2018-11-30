import { admin, user} from '../constants/action-types';

export const adminAction = () => (
  {
    type: admin
  }
)

export const userAction = () => (
  {
    type: user
  }
)
