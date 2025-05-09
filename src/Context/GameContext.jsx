import { useReducer } from "react"; 
import { initialState } from "./GameConstants";
import { GameContext } from "./GameContextDefinition"; 

function gameReducer(state, action){
    const {gameDuration, status, timer, score} = state;
    // note to self no brackets on the state when destructuring.
    // when destructuring the right hand side of the equation does NOT require brackets.
    switch(action.type){
        case "START_GAME":
            return {...state, 
                status: "playing",
                timer: timer > 0 ? timer : gameDuration,
                score: status === "paused" ? score : 0
            };
            // When the timer is 0 reset to gameDuration else make the timer decrement as intended
        case "PAUSE_GAME":
            return {...state, 
                status: "paused"
            }    
            // When the game is paused, the timer is paused
            case "SET_DIFFICULTY":
                return {...state, 
                    difficulty: action.payload
                };
                case "DECREMENT_TIMER":
                    return {...state, 
                        timer: timer - 1
                    };
                    case "SET_TIMER":
                        return {...state,
                            timer: action.payload
                        }
                        // The timer is decremented by 1 every second.
                        case "END_GAME":
                            return {...state,
                                status: "ended"
                            }
                    case "RESET_GAME":
                            return initialState;
                    default:
                        return state;
    }
}



export const GameProvider = ({children}) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    // useReducer it from the state and dispatch.
    
    return (
        // The GameContext.Provider ensures that the state and dispatch are available to all components in the children.
        <GameContext.Provider value={{state, dispatch}}>
            {children}
        </GameContext.Provider>
    );
}