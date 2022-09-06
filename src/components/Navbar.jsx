import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { linkData } from "../constants/Links";
import { InputField } from "./childComponents/InputField";

export const Navbar = () => {
	return (
		<>
			<div className='navbarContainer'>
				<div className='topNavbarDiv'>
					<div className='settingsDiv'>
						<SettingsIcon />

						<NotificationsActiveIcon />
					</div>
					<div className='tabNavigation'>
						{linkData.map((items) => {
							return <a>{items.title}</a>;
						})}
					</div>
					<div className='timelineDiv'>
						<p>
							Timeline <ArrowDropDownIcon />
						</p>
					</div>

					<button className='uploadMore'>
						<AddCircleOutlineIcon />
						<a>Upload More</a>
					</button>
				</div>
				<div className='bottomNavbarDiv'>
					<div className='library'>Library</div>
					<div className='searchBar'>
						<InputField
							type={"text"}
							placeholder={"Search all Photos"}
							value={""}
							name={"Searchbar"}
						/>
						<SearchIcon />
					</div>
				</div>
			</div>
		</>
	);
};
