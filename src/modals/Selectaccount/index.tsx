import UserProfile from "../../components/UserProfile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Heading,
  Button,
  Img,
  Text,
  Separator,
} from "@/components/ui";
import React from "react";

export default function Selectaccount() {
  return (
    <Dialog>
      <DialogContent className="w-full min-w-[1386px] bg-white-a700 p-[22px] sm:p-5">
        <div className="mt-2.5 flex items-center bg-white-a700 md:flex-col">
          <div className="flex flex-1 flex-col items-start md:self-stretch md:px-5">
            <div className="relative h-[920px] w-[92%] bg-gradient1">
              <Img
                src="img_line_pattern.png"
                width={240}
                height={286}
                alt="Linepattern"
                className="absolute right-0 top-0 m-auto h-[286px] w-[36%] object-contain"
              />
              <Img
                src="img_line_pattern_128x258.png"
                width={258}
                height={128}
                alt="Linepattern"
                className="absolute bottom-0 left-0 m-auto h-[128px] w-[40%] object-contain"
              />
              <div className="absolute bottom-[5%] left-0 right-0 mx-[50px] flex flex-1 flex-col items-end md:mx-0">
                <div className="w-[88%] md:w-full">
                  <div className="relative h-[442px]">
                    <div className="absolute left-0 right-0 top-0 mx-auto h-[358px] flex-1">
                      <Img
                        src="img_image_47.png"
                        width={318}
                        height={358}
                        alt="Imagefortyseven"
                        className="absolute bottom-0 left-[8%] top-0 my-auto h-[358px] w-[72%] rounded-[14px] object-contain"
                      />
                      <div className="absolute bottom-[23px] left-0 right-0 mx-auto flex flex-1 flex-col items-start gap-0.5">
                        <div className="mr-12 flex w-[54%] justify-center self-end rounded-[14px] bg-white-a700 p-3 shadow-md md:mr-0 md:w-full">
                          <div className="flex w-full justify-center gap-3">
                            <Button
                              variant="fill"
                              shape="round"
                              className="w-[44px] rounded-[10px] border-2 border-solid border-gray-100 px-1"
                            >
                              <Img src="img_thumbs_up.svg" width={34} height={34} />
                            </Button>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="flex justify-center self-stretch">
                                <Heading size="headinglg" as="h1" className="text-[15px] font-extrabold text-black-900">
                                  Payment Received
                                </Heading>
                              </div>
                              <Heading
                                size="headings"
                                as="h2"
                                className="text-[12px] font-extrabold text-deep_purple-a200"
                              >
                                + $34,908.00
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="w-[26%] rounded-[10px] bg-white-a700 py-3.5 shadow-lg md:w-full">
                          <div className="flex flex-col items-center gap-3.5">
                            <Button
                              variant="fill"
                              shape="circle"
                              colorScheme="green_50"
                              className="w-[44px] rounded-[22px] px-3"
                            >
                              <Img src="img_checkmark.svg" width={16} height={12} />
                            </Button>
                            <div className="flex flex-col items-center justify-center gap-4 self-stretch">
                              <Heading
                                size="headingxs"
                                as="h3"
                                className="self-stretch text-center text-[10px] font-bold leading-3 text-blue_gray-300"
                              >
                                Transfer was successful!
                              </Heading>
                              <Separator orientation="horizontal" className="h-px w-full self-stretch bg-gray-300" />
                              <Heading
                                size="headingmd"
                                as="h4"
                                className="text-[14px] font-extrabold text-black-900_02"
                              >
                                $36,128.00
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="img_contrast.svg"
                      width={98}
                      height={98}
                      alt="Contrast"
                      className="absolute bottom-[-1px] right-0 m-auto h-[98px] w-[20%] rounded-tl-[46px] rounded-tr-[46px] object-contain"
                    />
                  </div>
                  <div className="relative z-[1] mt-[-4px] flex flex-col gap-[22px]">
                    <Heading
                      size="heading4xl"
                      as="h5"
                      className="text-center text-[40px] font-bold leading-[44px] tracking-[-0.80px] text-white-a700 md:text-[38px] sm:text-[36px]"
                    >
                      All transactions, one platform
                    </Heading>
                    <Text size="texts" as="p" className="text-center text-[16px] font-normal leading-6 text-white-a700">
                      Autopay help user. you save goals and earn back offers. Go to disclaimer for more details and get
                      paychecks upto two days early!
                    </Text>
                  </div>
                </div>
                <Img
                  src="img_group_45.svg"
                  width={84}
                  height={82}
                  alt="Image"
                  className="relative z-[2] mr-[30px] mt-[-22px] h-[82px] w-[16%] object-contain md:mr-0"
                />
              </div>
              <div className="absolute left-0 right-0 top-[4%] mx-auto flex flex-col items-start gap-2.5">
                <Img src="img_plus.svg" width={28} height={28} alt="Plus" className="ml-[62px] h-[28px] md:ml-0" />
                <Img src="img_grid.svg" width={84} height={82} alt="Grid" className="h-[82px] w-[16%] object-contain" />
              </div>
              <Img
                src="img_plus.svg"
                width={28}
                height={28}
                alt="Plus"
                className="absolute bottom-[33%] left-[7%] m-auto h-[28px]"
              />
              <div className="absolute left-0 right-0 top-[19px] mx-[26px] flex flex-1 gap-2.5 md:mx-0">
                <Img src="img_television.svg" width={30} height={30} alt="Television" className="h-[30px]" />
                <Heading size="heading2xl" as="h6" className="text-[20px] font-bold text-white-a700">
                  AutoPay.
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex w-[46%] flex-col items-start px-12 md:w-full md:px-5">
            <Heading
              size="heading3xl"
              as="h2"
              className="ml-[76px] font-inter text-[32px] font-bold text-black-900_02 md:ml-0 md:text-[30px] sm:text-[28px]"
            >
              Create your Account
            </Heading>
            <Heading
              as="h3"
              className="ml-[110px] mt-2 font-inter text-[16px] font-semibold text-blue_gray-700 md:ml-0"
            >
              Send, Spend and Budget Smarter
            </Heading>
            <Heading as="h4" className="ml-[154px] mt-9 font-inter text-[16px] font-bold text-black-900_01 md:ml-0">
              Choose Account type
            </Heading>
            <div className="ml-1 mr-[50px] mt-[30px] flex flex-col gap-[22px] self-stretch md:mx-0">
              <UserProfile />
              <UserProfile />
            </div>
            <Button
              size="md"
              shape="round"
              colorScheme="deep_orange_700_01_yellow_900_01"
              rightIcon={
                <Img
                  src="img_arrowleft.svg"
                  width={14}
                  height={10}
                  alt="Arrow Left"
                  className="mb-0.5 mt-1.5 h-[10px] w-[14px] object-contain"
                />
              }
              className="mt-[30px] w-full min-w-[480px] max-w-[480px] gap-1 rounded-lg px-[34px] font-inter font-semibold sm:px-5"
            >
              Continue
            </Button>
            <Heading
              as="h5"
              className="ml-[98px] mt-[22px] flex font-inter text-[16px] font-medium text-black-900_02 md:ml-0"
            >
              <span className="text-black-900_02">Already have an account?&nbsp;</span>
              <a href="#" className="inline text-indigo-a200 underline">
                Login here
              </a>
            </Heading>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
