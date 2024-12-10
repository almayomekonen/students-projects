import gameLogo from "../assets/game-logo.png";

export default function Header() {
  return (
    <header>
      <img src={gameLogo} alt="tic-tac-toe" />
      <h1>Let&lsquo;s start playing the game</h1>
    </header>
  );
}
