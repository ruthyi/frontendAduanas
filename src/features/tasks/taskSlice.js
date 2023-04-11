import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'





const userSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const { tokenSession, _id, role } = action.payload;
            console.log(action.payload)
            const foundTask = state.find((task) => task.id === _id);
            if (foundTask) {
                foundTask.tokenSession = tokenSession;
                foundTask._id = _id;
                foundTask.role = role;
            } else {
                console.log(action);
                state.push(action.payload);
            }
        },
       
    },
});

export const { addTask, conect } = userSlice.actions;
export default userSlice.reducer;