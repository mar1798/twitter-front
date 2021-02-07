import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useHomeStyles} from "../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweet} from "../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../store/ducks/tweets/selectors";
import {LoadingState} from "../store/ducks/tweets/contracts/state";


interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> =
    ({ classes, maxRows}: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const addFormState = useSelector(selectAddFormState)
    const [text, setText] = React.useState<string>('');
    const [visibleNotifications, setVisibleNotifications] = React.useState<boolean>(false);
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length;

    React.useEffect(()=>{
        if(addFormState === LoadingState.ERROR) {
            setVisibleNotifications(true)
        }
    }, [addFormState])

    const handleCloseNotifications = () => {
        setVisibleNotifications(false);
    }

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text));
        setText('');
    };


    return (
        <div>

            <Snackbar
                open={visibleNotifications}
                onClose={handleCloseNotifications}
                message="Add tweet error"
            />

            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={!text || text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained">
                        {addFormState === LoadingState.LOADING?
                            <CircularProgress color="inherit" size={16} />: 'Твитнуть'}
                    </Button>
                </div>
            </div>
        </div>
    );
};
