const mainState = {
  jobs: {
    content: [],
  },

  favoriteJobs: {
    content: [],
  },
};

const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case "GET_QUERY_RESULT":
      return {
        ...state,
        jobs: {
          content: action.payload,
        },
      };

    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoriteJobs: {
          ...state.favoriteJobs,
          content: [...state.favoriteJobs.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favoriteJobs: {
          content: state.favoriteJobs.content.filter((job) => job._id !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
