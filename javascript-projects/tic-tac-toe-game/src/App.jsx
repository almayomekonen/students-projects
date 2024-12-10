import Header from "./components/Header";
import { Fragment } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

export default function App() {
  return (
    <Fragment>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </Fragment>
  );
}
