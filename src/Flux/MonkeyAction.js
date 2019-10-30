import dispatcher from "./MonkeyDispatcher";

export const MONKEY_ACTIONS = {
    CHANGE_ACTIVITY: 'monkeyActions.ChangeActivity'
};

export function changeActivity(activity) {
    console.log("Monkey Action=>"+activity);
    dispatcher.dispatch({
        type: MONKEY_ACTIONS.CHANGE_ACTIVITY,
        value: activity
    })
}