import React, { Component, useState } from "react";
import Router from "next/router";
import { Button, Col, Form, Input, Spinner } from "reactstrap";
import "../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);

  const login = async () => {
    setLoading(true);
    if (dataUser.username == "admin" && dataUser.password == "k4tarsis1234") {
      setCookie("token", "tokenuserlogin", { path: "/", maxAge: 3600 });
      await Swal.fire("OK", "Login Berhasil", "success");
      router.push("/admin/home-board");
    } else {
      Swal.fire("FAILED", "Username dan Password Tidak Cocok", "error");
    }
    setLoading(false);
  };

  return (
    <div
      className="justify-content-center text-center py-4"
      style={{
        paddingRight: "30vw",
        paddingLeft: "30vw",
      }}
    >
      <h3 className="m-0 mb-3 p-0">Login Page</h3>
      <Form>
        <div className="form-row">
          <Col className="mb-3 p-0 text-left ">
            <h5>Username</h5>
            <Input
              type="text"
              defaultValue={`${dataUser.username}`}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  username: `${e.target.value}`,
                });
              }}
            />
          </Col>
        </div>
      </Form>

      <Form>
        <div className="form-row">
          <Col className="mb-3 p-0 text-left ">
            <h5>Password</h5>
            <Input
              type="password"
              defaultValue={`${dataUser.password}`}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  password: `${e.target.value}`,
                });
              }}
            />
          </Col>
        </div>
      </Form>

      <Button
        color="secondary"
        style={{
          color: "#ffffff",
          backgroundColor: "#FE7900",
          maxWidth: "150px",
        }}
        className="border-0 mt-4"
        type="button"
        onClick={() => {
          login();
        }}
      >
        {loading == true ? (
          <>
            <div className="py-1 text-center align-content-center align-items-center">
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </div>
          </>
        ) : (
          <>Login</>
        )}
      </Button>
    </div>
  );
}
