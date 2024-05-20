import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { AppSidebarNav } from "./AppSidebarNav";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import navigation from "../_nav";


const AppSidebar = () => {

  const dispatch = useDispatch();
   const unfoldable = useSelector((state) => state.changeState.unfoldable); // Update with the correct state path
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow); // Update with the correct state path


  return (
    <CSidebar
      className="font-bold font-serif"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });}}>
      <CSidebarBrand className="d-none d-md-flex bg-white" to="/">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
      </CSidebarBrand>
      <CSidebarNav className="font-bold bg-orange-700 justify-items-center">
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
        dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};
export default React.memo(AppSidebar);
