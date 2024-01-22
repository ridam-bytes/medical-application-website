import React, {
  useReducer,
  useMemo,
  useContext,
  createContext,
  useCallback,
} from "react";

const initialState = () => {
  const localState = localStorage.getItem("medical_auth_state");

  try {
    if (localState) {
      const localData = JSON.parse(localState);
      return {
        email: localData.email,
        islogged: true,
      };
    }
  } catch {}

  return {
    islogged: false,
    email: "",
  };
};

export const AuthContext = createContext(initialState());

function authReducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN": {
      localStorage.removeItem("medical_auth_state");
      localStorage.setItem(
        "medical_auth_state",
        JSON.stringify({ email: payload.email })
      );
      return {
        ...state,
        islogged: true,
        email: payload.email,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("medical_auth_state");

      return {
        ...state,
        islogged: false,
        email: "",
      };
    }

    default: {
      return state;
    }
  }
}

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState());

  const login = useCallback(
    (email) => dispatch({ type: "LOGIN", payload: { email: email } }),
    [dispatch]
  );

  const logout = useCallback(() => dispatch({ type: "LOGOUT" }), [dispatch]);

  const value = useMemo(
    () => ({
      ...state,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return <AuthContext.Provider value={value} {...props} />;
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useUI  hook can be  used within a AuthProvider only.`);
  }
  return context;
};
