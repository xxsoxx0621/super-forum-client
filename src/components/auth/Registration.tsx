import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
import {
  isPasswordValid,
  PasswordTestResult,
} from "../../common/validators/PasswordValidator";
import { ModalProps } from "../types/ModalProps";
import { allowSubmit } from "./common/Helpers";
import PasswordComparison from "./common/PasswordComparison";
import userReducer from "./common/UserReducer";

const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabeld },
    dispatch,
  ] = useReducer(userReducer, {
    userName: "sohyeon",
    password: "",
    email: "admin@sohyeon.com",
    passwordConfirm: "",
    resultMsg: "",
    isSubmitDisabeld: true,
  });

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      payload: e.target.value,
      type: "userName",
    });
    if (!e.target.value)
      allowSubmit(dispatch, "Username cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "email" });
    if (!e.target.value) allowSubmit(dispatch, "Email connot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "password" });
    const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
    if (!passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true);
      return;
    }
    passwordsSame(passwordConfirm, e.target.value);
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      payload: e.target.value,
      type: "passwordConfirm",
    });
    passwordsSame(password, e.target.value);
  };

  const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
    if (passwordVal !== passwordConfirmVal) {
      allowSubmit(dispatch, "Passwords do not match", true);
      return false;
    } else {
      allowSubmit(dispatch, "", false);
      return true;
    }
  };

  const onClickRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <div>
              <label>username</label>
              <input type="text" value={userName} onChange={onChangeUserName} />
            </div>
            <div>
              <label>email</label>
              <input type="text" value={email} onChange={onChangeEmail} />
            </div>
            <div>
              <PasswordComparison
                dispatch={dispatch}
                password={password}
                passwordConfirm={passwordConfirm}
              />
            </div>
            <div>
              <label>password confirmation</label>
              <input
                type="password"
                placeholder="Password Confirmation"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
              />
            </div>
            <div className="reg-buttons">
              <div className="reg-btn-left">
                <button
                  style={{ marginLeft: ".5em" }}
                  className="action-btn"
                  disabled={isSubmitDisabeld}
                  onClick={onClickRegister}
                >
                  Register
                </button>
                <button
                  style={{ marginLeft: ".5em" }}
                  className="cancel-btn"
                  onClick={onClickCancel}
                >
                  Close
                </button>
              </div>
            </div>
            <span className="reg-btn-right">
              <strong>{resultMsg}</strong>
            </span>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};

export default Registration;
