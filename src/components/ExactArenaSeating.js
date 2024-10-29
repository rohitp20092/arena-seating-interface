import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSeat, clearSelection } from "../features/seatingSlice";
import { AlertDialog } from "./AlertDialog";

const sectionLayout = {
  K: { seats: 24, filledPattern: [2, 3,6,8,23,20] },
  J: { seats: 24, filledPattern: [4, 5] },
  I: { seats: 24, filledPattern: [1, 3, 5, 7] },
  H: { seats: 24, filledPattern: [2, 4, 6, 8, 10] },
  G: { seats: 24, filledPattern: [0, 2, 4, 6, 8] },
  F: { seats: 24, filledPattern: [1, 3, 5,15,11,16] },
  E: { seats: 24, filledPattern: [0, 5,16,18,22,23] },
  D: { seats: 24, filledPattern: [2, 3, 4,18,20,14,16,21] },
  C: { seats: 24, filledPattern: [0, 1, 8, 9] },
  B: { seats: 24, filledPattern: [2, 3, 4] },
  A: { seats: 24, filledPattern: [1, 2] },
};

const ExactArenaSeating = () => {
  const dispatch = useDispatch();
  const selectedSeat = useSelector((state) => state.seating.selectedSeat);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleSeatClick = (row, col) => {
    dispatch(selectSeat(`${row}-${col}`));
    setOpenDialog(true);
  };

  return (
    <div className="w-full p-6 bg-white rounded shadow">
      {Object.entries(sectionLayout).map(
        ([rowId, { seats, filledPattern }]) => (
          <div key={rowId} className="flex justify-between items-center mb-2">
            {/* Row label on the far left */}
            <div className="text-center w-6 font-bold">{rowId}</div>

            {/* Seats in the middle */}
            <div className="flex justify-center items-center">
              {Array.from({ length: seats / 2 }).map((_, idx) => (
                <div
                  key={`left-${idx}`}
                  onClick={() => handleSeatClick(rowId, idx)}
                  className={`w-6 h-6 m-0.5 ${
                    filledPattern.includes(idx) ? "bg-blue-600" : "bg-gray-300"
                  } cursor-pointer`}
                />
              ))}
              <div className="w-4" /> {/* Gap between left and right seats */}
              {Array.from({ length: seats / 2 }).map((_, idx) => (
                <div
                  key={`right-${idx}`}
                  onClick={() => handleSeatClick(rowId, seats - idx - 1)}
                  className={`w-6 h-6 m-0.5 ${
                    filledPattern.includes(seats - idx - 1)
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  } cursor-pointer`}
                />
              ))}
            </div>

            {/* Row label on the far right */}
            <div className="text-center w-6 font-bold">{rowId}</div>
          </div>
        )
      )}
      <AlertDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Seat Information"
        description={`Selected seat: ${selectedSeat}`}
      />
    </div>
  );
};

export default ExactArenaSeating;
