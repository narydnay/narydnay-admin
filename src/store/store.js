import { createStoreon } from 'storeon';
import { users } from './usersReducer/usersReducer';
import { apiStore } from './api/api-store';
import { uploadFiles } from './uploadFiles/uploadFiles';


export const store = createStoreon([
  users,
  apiStore,
  uploadFiles,
])