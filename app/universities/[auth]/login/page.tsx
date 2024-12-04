"use client";
import { useFormState } from "react-dom";
import login from "../../_actions/login";
import Link from "next/link";
import { redirect } from "next/navigation";
import SubmitButton from "../../admin/_component/SubmitButton";
import { style } from "../../constants/style";

export default function Login() {
  const [data, action] = useFormState(login, {});

  if (data.message) redirect("/universities");

  return (
    <div>
      Login
      <hr />
      <form action={action} className="mt-4">
        <div className="flex flex-col mb-2">
          <label htmlFor="email">Email</label>
          <input
            className={style}
            type="email"
            name="email"
            id="email"
            required
          />
          {data.error?.email && (
            <div className="text-red-600">{data.error?.email[0]}</div>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password</label>
          <input
            className={style}
            type="password"
            name="password"
            id="password"
            required
          />
          {data.error?.password && (
            <div className="text-red-600">{data.error?.password[0]}</div>
          )}
        </div>
        <div>
          <input
            className="w-6 h-6 mr-2 mb-6"
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label className="align-top" htmlFor="remember">
            Remember me
          </label>
        </div>
        <div>
          {data.error?.message && (
            <div className="text-red-600">{data.error?.message}</div>
          )}
        </div>
        <div>
          {data.message ? (
            <p>{data.message}</p>
          ) : (
            <div className="flex flex-col gap-2 ">
              <SubmitButton label="Login" />
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/admin/register"
                  className="text-blue-500 hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          )}
        </div>
      </form>
      <br />
      <hr />
      <Link href="/admin">Back</Link>
    </div>
  );
}