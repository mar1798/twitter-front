import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { Tweet } from '../../../components/Tweet';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetDataLoading, selectTweetDataItems } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import RepostIcon from "@material-ui/icons/LoopSharp";
import LikeIcon from "@material-ui/icons/FavoriteBorderSharp";
import ReplyIcon from "@material-ui/icons/Reply";

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetDataItems);
    const isLoading = useSelector(selectIsTweetDataLoading);
    const params: { id?: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }

        return () => {
            dispatch(setTweetData(undefined));
        };
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        );
    }

    if (tweetData) {
        return  (
            <Paper className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                        src={tweetData.user.avatarUrl}
                    />
                    <Typography>
                        <b>{tweetData.user.fullname}</b>&nbsp;
                        <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
            </Paper>

        )
    }
    return null;
};
