import { TurnedInNot } from "@mui/icons-material";
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWitdh }) => {
	const { displayName } = useSelector((state) => state.auth);
	return (
		<Box component={"nav"} sx={{ width: { sm: drawerWitdh }, flexShrink: { sm: 0 } }}>
			<Drawer
				variant="permanent" // temporary
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWitdh },
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap>
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{["Enero", "Febrero", "Marzo"].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText secondary={"Ad tempor fugiat sit ex exercitation."} />
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
