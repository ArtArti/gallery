import React from "react";
import {
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilLanguage,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useTranslation } from 'react-i18next';


const HeaderDropdown = () => {

  const { i18n } = useTranslation();

  const switchLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'fr', label: 'French' },
  ];


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement=" bottem-end" className=" cursor-pointer py-0" caret={false}>
        <CIcon icon={cilLanguage} className="me-2" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 cursor-pointer" placement="bottom-start">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Language
        </CDropdownHeader>
        {languages.map((lng)=>{
                return(
                  <CDropdownItem key={lng.code}
                className={lng.code === i18n.language ? "selected" : ""}
                onClick={()=>switchLanguage(lng.code)}
               >{lng.label}</CDropdownItem>
                )
             })}
      </CDropdownMenu>
    </CDropdown>
  );
};

export default HeaderDropdown;
