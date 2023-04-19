import { COMMON_MESSAGE } from "@/types";
import { FC } from "react";

interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-row items-center">
      <p className="text-sm sm:text-base text-neutral-900 font-semibold rounded-lg px-4 py-2">
        {COMMON_MESSAGE.CHATTING}
      </p>
      <button
        className="text-sm sm:text-base text-neutral-900 font-semibold rounded-lg px-4 py-2 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300"
        onClick={() => onReset()}
      >
        다시 시작하기
      </button>
    </div>
  );
};
