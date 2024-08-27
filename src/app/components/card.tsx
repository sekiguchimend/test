import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from './ActionAreaCard.module.scss'; // スタイルのインポート
import Image from 'next/image';

export default function ActionAreaCard() {
  return (
    <section>
      <div className={styles.block}>
        <Card className={styles.card}>
          <CardActionArea>
            <div className={styles.imageWrapper}>
              <Image src="/buil.png" width={140} height={140} alt="Lizard" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className={styles.block2}>
        <Card className={styles.card}>
          <CardActionArea>
            <div className={styles.imageWrapper}>
              <Image src="/woman.png" width={140} height={140} alt="Woman" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={styles.card}>
          <CardActionArea>
            <div className={styles.imageWrapper}>
              <Image src="/buil.png" width={140} height={140} alt="Lizard" />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </section>
  );
}
