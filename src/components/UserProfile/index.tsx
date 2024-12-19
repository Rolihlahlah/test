import { Heading, Text, Button, Img } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
  descriptionText?: React.ReactNode;
  accountTypeText?: React.ReactNode;
}

export default function UserProfile({
  descriptionText = "For freelancers and personal day to day finance operations.",
  accountTypeText = "Personal Account",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-2.5 bg-gray-50_02 shadow-xs flex-1 rounded-[10px]`}
    >
      <div className="mb-1 flex w-full items-start justify-center gap-3">
        <Img src="img_lock.svg" width={30} height={32} alt="Image" className="mt-3 h-[32px]" />
        <div className="relative h-[60px] flex-1 self-center">
          <div className="absolute bottom-[0.45px] left-0 right-0 mx-auto flex flex-1 flex-col items-end px-1 py-1.5">
            <Button size="xs" shape="circle" className="w-[40px] rounded-[20px] px-2">
              <Img src="img_contrast_gray_900.svg" width={24} height={24} />
            </Button>
          </div>
          <Text
            as="p"
            className="absolute bottom-[-1.24px] left-0 m-auto w-[88%] font-inter text-[14px] font-normal leading-[19px] text-black-900_02"
          >
            {descriptionText}
          </Text>
          <Heading as="h6" className="absolute left-0 top-0 m-auto font-inter text-[16px] font-bold text-black-900_02">
            {accountTypeText}
          </Heading>
        </div>
      </div>
    </div>
  );
}
