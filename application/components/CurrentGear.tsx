import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "../styles/Gameplay.module.css";

const GoldGem = (
  <div className={styles.slide}>
    <img src="./OverflowCoin.PNG" height="48" width="48" alt="gold-gem" />
  </div>
);

type Props = {
  pickaxe: NFT | undefined;
};

export default function GameplayAnimation({ pickaxe }: Props) {
  if (!pickaxe) {
    return <div style={{ marginLeft: 8 }}> <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
    <img src="./NFT1.PNG" style={{ height: 200 }} />
  </div>I need CORN to earn rewards!</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
      </div>
    </div>
  );
}
