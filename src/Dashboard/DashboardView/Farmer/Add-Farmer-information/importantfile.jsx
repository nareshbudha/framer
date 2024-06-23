import React from "react";
import Calendars from "./Calendars";

const info = () => {
  return (
    <div className="flex flex-col justify-between gap-5 px-5 laptop:px-0 my-10 mx-auto max-w-[1800px]">
      {/* व्यक्तिगत विवरण */}
      <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            व्यक्तिगत विवरण
          </p>
      
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 pt-10">
          <div className="relative gap-2 flex flex-col ">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">परिचय पत्र नं:</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="number"
              placeholder="परिचय पत्र नं:"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">नागरिकता न. : </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base  "
              type="number"
              placeholder="नागरिकता न. : "
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">नाम:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="नाम"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">लिङ्ग:</p>
            <select className=" border-[#D0D7E2] border-[1px] flex flex-col rounded-xl px-1 py-1 text-sm tablet:text-base tabletmd:px-2 tabletmd:py-3">
              <option className="text-[#000000]" value="">
                एउटा छनौट गर्नुहोस्
              </option>
              <option className="text-red-500 font-light text-base" value="">
                पुरुष
              </option>
              <option className="text-red-500 font-light text-base" value="">
                महिला
              </option>
              <option className="text-red-500 font-light text-base" value="c">
                अन्य
              </option>
            </select>
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold ">मोबाइल न:</p>

            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="यहाँ फोन नम्बर प्रविष्ट गर्नुहोस्"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">जन्म मिति:</p>
            <Calendars />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">शैक्षिक योग्यता:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="शैक्षिक योग्यता"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">नागरिकता जारी जिल्ला:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="नागरिकता प्र.प.जारी गर्ने जिल्ला"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">कृषि कार्यको क्षेत्र:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="शैक्षिक योग्यता"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">
              तपाईं वार्षिक औसत कति महिना कृषि कार्यमा संलग्न हुनुहुन्छ? :
            </p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder=""
              // required
            />
          </div>
         
        </div>
      </form>

      {/* किसानको ठेगाना */}
      <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className=" text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            किसानको ठेगाना
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
        <p>स्थायी ठेगाना</p>
        <div className="text-[#000000] grid tablet:grid-cols-4  gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold"> प्रदेश: </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="प्रदेशको नाम "
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">जिल्ला:</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="जिल्लाको नाम"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">नगरपालिका:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="नगरपालिकाको नाम"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">वार्ड:</p>

            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="वार्ड न"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">टोल:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="टोलको नाम"
              // required
            />
          </div>
        </div>
        <p>अस्थायी ठेगाना</p>
        <div className="text-[#000000] grid tablet:grid-cols-4  gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold"> प्रदेश: </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="प्रदेशको नाम "
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">जिल्ला:</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="जिल्लाको नाम"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">नगरपालिका:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="नगरपालिकाको नाम"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">वार्ड:</p>

            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="वार्ड न"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">टोल:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="टोलको नाम"
              // required
            />
          </div>
        </div>
      </form>
      {/* पारिवारिक विवरण */}
      <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            पारिवारिक विवरण
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold"> नाम:</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="किसानको नाम:"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">उमेर:</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="१० वर्ष"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold text-base  ">लिङ्ग:</p>
            <select className=" border-[#D0D7E2] border-[1px] flex flex-col rounded-xl px-1 py-1  tabletmd:px-2 tabletmd:py-3">
              <option className="text-[#000000]" value="">
                एउटा छनौट गर्नुहोस्
              </option>
              <option className="text-red-500 font-light text-base" value="">
                पुरुष
              </option>
              <option className="text-red-500 font-light text-base" value="">
                महिला
              </option>
              <option className="text-red-500 font-light text-base" value="c">
                अन्य
              </option>
            </select>
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold "> नाता:</p>

            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="सदस्य संख्या"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">नागरिकता नम्बर: </p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="नागरिकता  नम्बर"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">फोन नम्बर:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="फोन नम्बर"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold "> कृषि कार्यको क्षेत्र:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="  कृषि कार्यको क्षेत्र"

              // required
            />
          </div>
        </div>
        <div className="flex gap-2 mt-5 flex-col tablet:flex-row">
          <p>कृषि पेशामा संलग्न हुनु भएको कति वर्ष भयो?</p>{" "}
          <input
            className=" border-[#D0D7E2] border-2 flex rounded "
            type="text"
            placeholder=""
            // required
          />
        </div>
      </form>
      {/* जग्गाको विवरण */}
      <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] rounded p-2 font-bold text-xl tablet:text-2xl tabletmd:text-3xl">
            जग्गाको विवरण
          </p>
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold text-base  ">जग्गाको किसिम</p>
            <select className=" border-[#D0D7E2] border-[1px] flex flex-col rounded-xl px-1 py-1  tabletmd:px-2 tabletmd:py-3">
              <option className="text-[#000000]" value="">
                एउटा छनौट गर्नुहोस्
              </option>
              <option className="text-red-500 font-light text-base" value="">
                आफ्नो
              </option>
              <option className="text-red-500 font-light text-base" value="">
                अरुको
              </option>
              <option value="c"></option>
            </select>
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold"> स्वामित्व ( जग्गा धनी ):</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="आफ्नो/परिवारको"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">जमिनको किसिम:</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="खेत/पाखो/बारी"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">क्षेत्रफल : </p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="बिघा-कठ्ठा-धुर"
              // required
            />
          </div>
        </div>
      </form>

      {/* सिँचाइ विवरण */}
      <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className=" text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            सिँचाइ विवरण
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold text-base  ">सिँचाइ उपलब्धता:</p>
            <select className=" border-[#D0D7E2] border-[1px] flex flex-col rounded-xl px-1 py-1  tabletmd:px-2 tabletmd:py-3">
              <option className="text-[#000000]" value="">
                एउटा छनौट गर्नुहोस्
              </option>
              <option className="text-red-500 font-light text-base" value="">
                छ
              </option>
              <option className="text-red-500 font-light text-base" value="">
                छैन
              </option>
            </select>
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">सिँचित क्षेत्रफल :</p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="बिघा-कठ्ठा-धुर"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">सिँचाइको स्रोत :</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="सिँचाइ कुलो,आकाशे पानी सङ्कलन"
              // required
            />
          </div>
          
        </div>
       
      </form>
      {/* कृषि व्यवसाय/फर्म/उद्यम दर्ता */}
      <form className="grid-1  ">
        <div className="flex flex-col gap-2">
        <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl tablet:text-2xl">
            कृषि व्यवसाय/फर्म/उद्यम दर्ता
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">
              कृषि व्यवसाय / फर्म / उद्यमको किसानको नाम:
            </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type=""
              placeholder="कृषि व्यवसाय  / फर्म /  उद्यमकोकिसानको नाम"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">ठेगाना: </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="number"
              placeholder="कर्णाली प्रदेश सुर्खेत बीरेन्द्रनगर नगरपालिका ७
"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">दर्ता नम्बर:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="दर्ता नम्बर"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col w-fit">
            <p className=" font-bold ">दर्ता मिति:</p>
            <Calendars />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">दर्ता भएको कार्यालय:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="आन्तिरक राजश्व"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">व्यवसाय/फर्म/उद्यमको किसिम:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="मिश्रित (कृषि र पशु)"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className=" font-bold ">वार्षिक रोजगारी सिर्जना(संख्या ):</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="५ जना"
              // required
            />
          </div>
        </div>
      </form>
        {/* बाली उत्पादन/बजारीकरण विवरण  */}
        <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            बाली उत्पादन/बजारीकरण विवरण 
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
         
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">बाली/उत्पादनको नाम </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="text"
              placeholder="रायोको साग"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">परिमाण :</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="२ के.जी. "
              // required
            />
          </div>    <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">प्रति एकाई दर (रुपैयाँ):</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="१५"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">बजारीकरणको तरिका:</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="text"
              placeholder="व्यापारी घरमै आएर"
              // required
            />
          </div>
        </div>
      </form>
       {/* कागजात अपलोड */}
       <form className="grid-1  ">
        <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            कागजात अपलोड
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
         
          <div className="relative gap-2 flex flex-col ">
            <p className=" font-bold">पासपोर्ट साइजको फोटो : </p>
            <input
              className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
              type="file"
              placeholder="पासपोर्ट साइज फोटो"
              // required
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">नागरीकताको फोटो :</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="file"
              placeholder  =" नागरीकता "
              // required
            />
          </div>    <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">लाल पुर्जाको फोटो :</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="file"
              placeholder="लाल पुर्जा"
              // required
            />
          </div>

          <div className="relative gap-2 flex flex-col">
            <p className="  font-bold">कृषि व्यवसाय  / 
            फर्म /  उद्यम प्यान/भ्याटको फोटो :</p>
            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
              type="file"
              placeholder="प्यान/भ्याट"
              // required
            />
          </div>
        </div>
      </form>
       <button className="px-2 py-1 text-white bg-green-400">Submit</button>
    </div>
  );
};

export default info;
