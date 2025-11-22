import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid } from "uuid";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  birthdate: z.string().refine((s) => !isNaN(Date.parse(s))),
  gender: z.enum(["male", "female", "other"])
});

type UserFormProps = {
  initial?: z.infer<typeof schema> & { id: string; createdAt: string };
  onSave: (user: z.infer<typeof schema> & { id: string; createdAt: string }) => void;
  onCancel: () => void;
};

export default function UserForm({ initial, onSave, onCancel }: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    initial
      ? reset(initial)
      : reset({ firstName: "", lastName: "", birthdate: "", gender: "male" });
  }, [initial]);

  const submit = (data: any) => {
    const user = initial
      ? { ...initial, ...data }
      : { id: uuid(), createdAt: new Date().toISOString(), ...data };
    onSave(user);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="grid gap-4">
      <div>
        <label className="text-sm md:text-base font-semibold">First Name</label>
        <input
          {...register("firstName")}
          className="w-full text-sm md:text-base border rounded-md px-3 py-2"
        />
        <p className="text-xs md:text-sm text-red-600">
          {errors.firstName?.message?.toString()}
        </p>
      </div>

      <div>
        <label className="text-sm md:text-base font-semibold">Last Name</label>
        <input
          {...register("lastName")}
          className="w-full text-sm md:text-base border rounded-md px-3 py-2"
        />
        <p className="text-xs md:text-sm text-red-600">
          {errors.lastName?.message?.toString()}
        </p>
      </div>

      <div>
        <label className="text-sm md:text-base font-semibold">Birthdate</label>
        <input
          type="date"
          {...register("birthdate")}
          className="w-full text-sm md:text-base border rounded-md px-3 py-2"
        />
        <p className="text-xs md:text-sm text-red-600">
          {errors.birthdate?.message?.toString()}
        </p>
      </div>

      <div>
        <label className="text-sm md:text-base font-semibold">Gender</label>
        <select
          {...register("gender")}
          className="w-full text-sm md:text-base border rounded-md px-3 py-2"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="border px-3 py-1 rounded-md text-sm md:text-base"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="border px-3 py-1 rounded-md text-sm md:text-base bg-blue-600 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
