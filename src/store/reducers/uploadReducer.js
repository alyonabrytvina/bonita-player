import types from '../types/uploadTypes';

const initialState = {
  file: null,
  track: null,
};

export function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_UPLOAD_FILE:
      return {
        ...state,
      };
    case types.SET_UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        file: action.payload,
      };
    case types.SET_UPLOAD_TRACK:
      return {
        ...state,
      };
    case types.SET_UPLOAD_TRACK_SUCCESS:
      return {
        ...state,
        track: action.payload,
      };
    default:
      return state;
  }
}