import React from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAltRounded";
import UserIcon from "@material-ui/icons/PersonOutlineRounded";
import {useHomeStyles} from "../pages/Home";


interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps):React.ReactElement => {
        return (
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <IconButton  className={classes.logo} aria-label="delete" color="primary">
                            <TwitterIcon className={classes.logoIcon}/>
                        </IconButton>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                            <SearchIcon  className={classes.sideMenuListItemIcon}/>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Поиск</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                            <NotificationIcon className={classes.sideMenuListItemIcon}/>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                            <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                            <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Закладки</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                            <ListIcon className={classes.sideMenuListItemIcon}/>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Список</Typography>
                    </div>

                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                            <UserIcon className={classes.sideMenuListItemIcon}/>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Профиль</Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button className={classes.sideMenuListButton} variant="contained"
                            color="primary" fullWidth>Твитнуть</Button>
                </li>
            </ul>
        );
}

