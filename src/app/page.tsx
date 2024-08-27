"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';  // 追加
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardActions, Grid, Paper } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import styles from './Home.module.scss';

export default function Home() {
  const [activeTab, setActiveTab] = useState('事業紹介');

  return (
    <div className={styles.container}>
      <Head>
        <title>G-TREE</title>
        <meta name="description" content="G-TREE corporate website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image src="/" alt="G-TREE Logo" width={120} height={40} />
          </Typography>
          <Link href="/" passHref>
            <Button
              color="inherit"
              startIcon={<AccountBalanceIcon />}
              onClick={() => setActiveTab('事業紹介')}
              className={activeTab === '事業紹介' ? styles.activeTab : ''}
            >
              事業紹介
            </Button>
          </Link>
          <Link href="/company" passHref>
            <Button
              color="inherit"
              startIcon={<BusinessIcon />}
              onClick={() => setActiveTab('会社案内')}
              className={activeTab === '会社案内' ? styles.activeTab : ''}
            >
              会社案内
            </Button>
          </Link>
          <Link href="/careers" passHref>
            <Button
              color="inherit"
              startIcon={<GroupIcon />}
              onClick={() => setActiveTab('スタッフ募集')}
              className={activeTab === 'スタッフ募集' ? styles.activeTab : ''}
            >
              スタッフ募集
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" className={styles.sectionTitle}>
            事業紹介<span>Business Introduction</span>
          </Typography>
          <h1 className={styles.h1}>ここに写真をいれる</h1>

          <Card className={styles.card}>
            <Box className={styles.cardContentWrapper}>
              <Image src="/true-self.jpg" alt="TRUE SELF" width={300} height={300} className={styles.cardImage} />
              <CardContent className={styles.cardContent}>
                <Typography variant="h5" component="div" gutterBottom>
                  TRUE SELF <span style={{ fontSize: '0.7em', color: 'rgba(0, 0, 0, 0.7)' }}>整体 & リラクゼーション</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  本来の自分自身の快適な状態を取り戻すをコンセプトとし、2014年より開始した整体＆リラクゼーション事業です。
                  癒しの空間に通っていただき、筋肉や骨の障害の元を取りながらバランスを戻し、自然治癒力をあげていくことを目指しています。
                </Typography>
                <CardActions>
                  <Button size="small" color="primary" href="https://web.archive.org/web/20170923150443/http://true-self.jp.net/" target="_blank" rel="noopener noreferrer">
                    TRUE SELF ホームページはこちら ＞＞
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Card>

          <Card className={styles.card}>
            <Box className={styles.cardContentWrapper}>
              <Image src="/chery.jpg" alt="さくら整体院" width={300} height={300} className={styles.cardImage} />
              <CardContent className={styles.cardContent}>
                <Typography variant="h5" component="div" gutterBottom>
                  さくら整体院 <span style={{ fontSize: '0.7em', color: 'rgba(0, 0, 0, 0.7)' }}>整体 & アロマオイルコース</span> 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  G-TREE株式会社代表取締役・玉井が、津田沼（千葉県）に2008年に開業した整体院。
                  “身体全体のバランスを取り戻し体の機能を改善し自然治癒力を高めるのが整体”という
                  信念の元で施術を行うTRUE SELFの母体となった整体院です。
                  女性スタッフによるアロマオイルコースもございます。
                </Typography>
                <CardActions>
                  <Button size="small" color="primary" href="https://web.archive.org/web/20170923150443/http://sakuraseitai.jp/" target="_blank" rel="noopener noreferrer">
                    さくら整体院 ホームページはこちら ＞＞
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        </Container>
      </main>
      
      <footer className={styles.footer}>
        <Container maxWidth="lg">
          <Box className={styles.footerContent}>
            <Box className={styles.logoContainer}>
              <Image src="/g-tree-logo.png" alt="G-TREE Logo" width={50} height={50} />
              <Box className={styles.companyInfo}>
                <Typography variant="h6" component="div">G-TREE株式会社</Typography>
                <Typography variant="body2">〒260-0028 千葉県千葉市中央区新町1-18 上野ビル3F</Typography>
                <Typography variant="body2">TEL：043-216-2365</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.footerBottom}>
            <Typography variant="body2" className={styles.copyright}>
              Copyright c G-TREE All right reserved
            </Typography>
            <Box className={styles.navLinks}>
              <Button color="inherit">事業紹介</Button>
              <Button color="inherit">会社案内</Button>
              <Button color="inherit">スタッフ募集</Button>
            </Box>
          </Box>
        </Container>
      </footer>
    </div>
  );
}
