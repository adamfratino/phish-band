"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { schema, type FormSchema } from "./schema";
import { submitForm } from "./actions";

export const MessageForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormSchema> = async (formData) => {
    console.log("attempting to submit form...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();
      submitForm(formData);
      setHasSubmitted(true);
      console.log("form successfully submitted!");
    } catch (err) {
      console.log("form submission failed!", err);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-md font-bold text-balance">
        <div className="flex gap-3 items-center">
          <div className="size-2 rounded-full bg-[mediumseagreen] animate-pulse outline outline-2 outline-[mediumseagreen] outline-offset-2" />
          <span className="text-xs text-[mediumseagreen]">Processing...</span>
        </div>
        <h1 className="text-2xl mb-2 font-bold tracking-tight">
          Your post has been submitted!
        </h1>
        <p className="text-xs">
          It&apos;ll take a few moments to update our database. Once that&apos;s
          done, your new post will be visible on the{" "}
          <Link href="/">homepage</Link>.
        </p>
        <p className="text-xs">
          In the meantime, head on over to our{" "}
          <a href="https://bsky.app/profile/phish.band" target="_blank">
            Bluesky
          </a>
          , where your post should already be live.
        </p>
        <DownArrowSvg className="self-center size-4 fixed bottom-20 fill-white animate-bounce" />
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md"
      >
        <h1 className="text-xl md:text-2xl mb-8 text-center font-bold tracking-tight uppercase">
          ok, post something clever
        </h1>
        <input
          {...register("big_text")}
          id="big-text"
          placeholder="big text"
          className={`mb-4 h-10 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[gold] outline-offset-2 border-2 ${
            errors.big_text ? "outline-[tomato]" : "outline-[mediumseagreen]"
          }`}
        />
        <input
          {...register("small_text")}
          id="small-text"
          placeholder="small text"
          className={`mb-4 h-10 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[gold] outline-offset-2 border-2 ${
            errors.small_text ? "outline-[tomato]" : "outline-[mediumseagreen]"
          }`}
        />
        <input
          {...register("link")}
          id="small-text"
          placeholder="link (optional)"
          className={`mb-4 h-10 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[gold] outline-offset-2 border-2 ${
            errors.link ? "outline-[tomato]" : "outline-[mediumseagreen]"
          }`}
        />
        <button
          type="submit"
          className="font-bold ml-auto py-1 px-3 w-full whitespace-nowrap rounded-md h-10 text-sm transition-colors focus-visible:outline-none  bg-[mediumseagreen] text-background hover:bg-[mediumseagreen]/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </form>
    </>
  );
};

const DownArrowSvg = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 6v6h4l-7 7-7-7h4V6h6z" />
  </svg>
);
