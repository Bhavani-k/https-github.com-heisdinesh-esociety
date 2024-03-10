import {
  CREATE_SOCIETY,
  CREATE_SOCIETY_INIT,
  CREATE_SOCIETY_SUCCESS,
  CREATE_SOCIETY_FAILURE,
  GET_ALL_USER_EMAILS,
  GET_ALL_USER_EMAILS_INIT,
  GET_ALL_USER_EMAILS_SUCCESS,
  GET_ALL_USER_EMAILS_FAILURE,
  CREATE_FAMILY,
  CREATE_FAMILY_INIT,
  CREATE_FAMILY_SUCCESS,
  CREATE_FAMILY_FAILURE,
  UPDATE_FAMILY,
  UPDATE_FAMILY_INIT,
  UPDATE_FAMILY_SUCCESS,
  UPDATE_FAMILY_FAILURE,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_INIT,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_FAILURE,
  UPDATE_ACTIVITY,
  UPDATE_ACTIVITY_INIT,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_FAILURE,
  GET_ALL_FAMILIES,
  GET_ALL_FAMILIES_INIT,
  GET_ALL_FAMILIES_SUCCESS,
  GET_ALL_FAMILIES_FAILURE,
  GET_ONE_FAMILY,
  GET_ONE_FAMILY_INIT,
  GET_ONE_FAMILY_SUCCESS,
  GET_ONE_FAMILY_FAILURE,
  GET_ALL_ACTIVITIES,
  GET_ALL_ACTIVITIES_INIT,
  GET_ALL_ACTIVITIES_SUCCESS,
  GET_ALL_ACTIVITIES_FAILURE,
  GET_ONE_ACTIVITY,
  GET_ONE_ACTIVITY_INIT,
  GET_ONE_ACTIVITY_SUCCESS,
  GET_ONE_ACTIVITY_FAILURE,
} from "./actionTypes";
const initialState = {
  societyDetails: null,
  createSocietySuccess: false,
  createSocietyFailure: false,
  createSocietyError: null,

  // Initial state properties for GET_ALL_USER_EMAILS
  allUserEmails: null,
  getAllUserEmailsSuccess: false,
  getAllUserEmailsFailure: false,
  getAllUserEmailsError: null,

  // Initial state properties for CREATE_FAMILY
  createdFamily: null,
  createFamilySuccess: false,
  createFamilyFailure: false,
  createFamilyError: null,

  // Initial state properties for UPDATE_FAMILY
  updatedFamily: null,
  updateFamilySuccess: false,
  updateFamilyFailure: false,
  updateFamilyError: null,

  // Initial state properties for CREATE_ACTIVITY
  createdActivity: null,
  createActivitySuccess: false,
  createActivityFailure: false,
  createActivityError: null,

  // Initial state properties for UPDATE_ACTIVITY
  updatedActivity: null,
  updateActivitySuccess: false,
  updateActivityFailure: false,
  updateActivityError: null,

  // Initial state properties for GET_ALL_FAMILIES
  allFamilies: null,
  getAllFamiliesSuccess: false,
  getAllFamiliesFailure: false,
  getAllFamiliesError: null,

  // Initial state properties for GET_ONE_FAMILY
  oneFamily: null,
  getOneFamilySuccess: false,
  getOneFamilyFailure: false,
  getOneFamilyError: null,

  // Initial state properties for GET_ALL_ACTIVITIES
  allActivities: null,
  getAllActivitiesSuccess: false,
  getAllActivitiesFailure: false,
  getAllActivitiesError: null,

  // Initial state properties for GET_ONE_ACTIVITY
  oneActivity: null,
  getOneActivitySuccess: false,
  getOneActivityFailure: false,
  getOneActivityError: null,
};

const societyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SOCIETY:
      console.log(action.payload);
      return {
        ...state,
        societyDetails: null,
        createSocietySuccess: false,
        createSocietyFailure: false,
      };
    case CREATE_SOCIETY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        societyDetails: action.payload,
        createSocietySuccess: true,
        createSocietyFailure: false,
      };
    case CREATE_SOCIETY_FAILURE:
      return {
        ...state,
        createSocietyError: action.payload,
        createSocietySuccess: false,
        createSocietyFailure: true,
      };
    case CREATE_SOCIETY_INIT:
      return {
        ...state,
        createSocietyError: null,
        createSocietySuccess: false,
        createSocietyFailure: false,
        societyDetails: null,
      };
    case GET_ALL_USER_EMAILS:
      console.log(action.payload);
      return {
        ...state,
        allUserEmails: null,
        getAllUserEmailsSuccess: false,
        getAllUserEmailsFailure: false,
      };
    case GET_ALL_USER_EMAILS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        allUserEmails: action.payload,
        getAllUserEmailsSuccess: true,
        getAllUserEmailsFailure: false,
      };
    case GET_ALL_USER_EMAILS_FAILURE:
      return {
        ...state,
        getAllUserEmailsError: action.payload,
        getAllUserEmailsSuccess: false,
        getAllUserEmailsFailure: true,
      };
    case GET_ALL_USER_EMAILS_INIT:
      return {
        ...state,
        getAllUserEmailsError: null,
        getAllUserEmailsSuccess: false,
        getAllUserEmailsFailure: false,
        allUserEmails: null,
      };
    case CREATE_FAMILY:
      console.log(action.payload);
      return {
        ...state,
        createdFamily: null,
        createFamilySuccess: false,
        createFamilyFailure: false,
      };
    case CREATE_FAMILY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        createdFamily: action.payload,
        createFamilySuccess: true,
        createFamilyFailure: false,
      };
    case CREATE_FAMILY_FAILURE:
      return {
        ...state,
        createFamilyError: action.payload,
        createFamilySuccess: false,
        createFamilyFailure: true,
      };
    case CREATE_FAMILY_INIT:
      return {
        ...state,
        createFamilyError: null,
        createFamilySuccess: false,
        createFamilyFailure: false,
        createdFamily: null,
      };
    case UPDATE_FAMILY:
      console.log(action.payload);
      return {
        ...state,
        updatedFamily: null,
        updateFamilySuccess: false,
        updateFamilyFailure: false,
      };
    case UPDATE_FAMILY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        updatedFamily: action.payload,
        updateFamilySuccess: true,
        updateFamilyFailure: false,
      };
    case UPDATE_FAMILY_FAILURE:
      return {
        ...state,
        updateFamilyError: action.payload,
        updateFamilySuccess: false,
        updateFamilyFailure: true,
      };
    case UPDATE_FAMILY_INIT:
      return {
        ...state,
        updateFamilyError: null,
        updateFamilySuccess: false,
        updateFamilyFailure: false,
        updatedFamily: null,
      };

    case CREATE_ACTIVITY:
      console.log(action.payload);
      return {
        ...state,
        createdActivity: null,
        createActivitySuccess: false,
        createActivityFailure: false,
      };
    case CREATE_ACTIVITY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        createdActivity: action.payload,
        createActivitySuccess: true,
        createActivityFailure: false,
      };
    case CREATE_ACTIVITY_FAILURE:
      return {
        ...state,
        createActivityError: action.payload,
        createActivitySuccess: false,
        createActivityFailure: true,
      };
    case CREATE_ACTIVITY_INIT:
      return {
        ...state,
        createActivityError: null,
        createActivitySuccess: false,
        createActivityFailure: false,
        createdActivity: null,
      };

    // Add cases for UPDATE_ACTIVITY, GET_ALL_FAMILIES, GET_ONE_FAMILY, etc.

    // Continue adding cases for other action types
    case UPDATE_ACTIVITY:
      console.log(action.payload);
      return {
        ...state,
        updatedActivity: null,
        updateActivitySuccess: false,
        updateActivityFailure: false,
      };
    case UPDATE_ACTIVITY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        updatedActivity: action.payload,
        updateActivitySuccess: true,
        updateActivityFailure: false,
      };
    case UPDATE_ACTIVITY_FAILURE:
      return {
        ...state,
        updateActivityError: action.payload,
        updateActivitySuccess: false,
        updateActivityFailure: true,
      };
    case UPDATE_ACTIVITY_INIT:
      return {
        ...state,
        updateActivityError: null,
        updateActivitySuccess: false,
        updateActivityFailure: false,
        updatedActivity: null,
      };
    case GET_ALL_FAMILIES:
      console.log(action.payload);
      return {
        ...state,
        allFamilies: null,
        getAllFamiliesSuccess: false,
        getAllFamiliesFailure: false,
      };
    case GET_ALL_FAMILIES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        allFamilies: action.payload,
        getAllFamiliesSuccess: true,
        getAllFamiliesFailure: false,
      };
    case GET_ALL_FAMILIES_FAILURE:
      return {
        ...state,
        getAllFamiliesError: action.payload,
        getAllFamiliesSuccess: false,
        getAllFamiliesFailure: true,
      };
    case GET_ALL_FAMILIES_INIT:
      return {
        ...state,
        getAllFamiliesError: null,
        getAllFamiliesSuccess: false,
        getAllFamiliesFailure: false,
        allFamilies: null,
      };

    case GET_ONE_FAMILY:
      console.log(action.payload);
      return {
        ...state,
        oneFamily: null,
        getOneFamilySuccess: false,
        getOneFamilyFailure: false,
      };
    case GET_ONE_FAMILY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        oneFamily: action.payload,
        getOneFamilySuccess: true,
        getOneFamilyFailure: false,
      };
    case GET_ONE_FAMILY_FAILURE:
      return {
        ...state,
        getOneFamilyError: action.payload,
        getOneFamilySuccess: false,
        getOneFamilyFailure: true,
      };
    case GET_ONE_FAMILY_INIT:
      return {
        ...state,
        getOneFamilyError: null,
        getOneFamilySuccess: false,
        getOneFamilyFailure: false,
        oneFamily: null,
      };

    // Add cases for GET_ALL_ACTIVITIES, GET_ONE_ACTIVITY, etc.

    case GET_ALL_ACTIVITIES:
      console.log(action.payload);
      return {
        ...state,
        allActivities: null,
        getAllActivitiesSuccess: false,
        getAllActivitiesFailure: false,
      };
    case GET_ALL_ACTIVITIES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        allActivities: action.payload,
        getAllActivitiesSuccess: true,
        getAllActivitiesFailure: false,
      };
    case GET_ALL_ACTIVITIES_FAILURE:
      return {
        ...state,
        getAllActivitiesError: action.payload,
        getAllActivitiesSuccess: false,
        getAllActivitiesFailure: true,
      };
    case GET_ALL_ACTIVITIES_INIT:
      return {
        ...state,
        getAllActivitiesError: null,
        getAllActivitiesSuccess: false,
        getAllActivitiesFailure: false,
        allActivities: null,
      };

    case GET_ONE_ACTIVITY:
      console.log(action.payload);
      return {
        ...state,
        oneActivity: null,
        getOneActivitySuccess: false,
        getOneActivityFailure: false,
      };
    case GET_ONE_ACTIVITY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        oneActivity: action.payload,
        getOneActivitySuccess: true,
        getOneActivityFailure: false,
      };
    case GET_ONE_ACTIVITY_FAILURE:
      return {
        ...state,
        getOneActivityError: action.payload,
        getOneActivitySuccess: false,
        getOneActivityFailure: true,
      };
    case GET_ONE_ACTIVITY_INIT:
      return {
        ...state,
        getOneActivityError: null,
        getOneActivitySuccess: false,
        getOneActivityFailure: false,
        oneActivity: null,
      };

    default:
      return state;
  }
};

export default societyReducer;
