
"use client";
import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import styles from './Company.module.scss'; // スタイルのインポート
import ActionAreaCard from "../components/card";
export default function Company() {
  const [activeTab, setActiveTab] = React.useState('会社案内');

  return (
    <div className={styles.container}>
      <Head>
        <title>会社案内 - G-TREE</title>
        <meta name="description" content="G-TREE corporate information" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            会社案内 <span>Company Information</span>
          </Typography>
          <Box className={styles.featureSection}>
            <Typography variant="h5" component="div" className={styles.featureTitle}>
              3つの特徴
            </Typography>
          </Box>
          <div className={styles.blocks}>
            <ActionAreaCard />
          </div>
        </Container>
      </main>
      <footer className={styles.footer}>
        <Container maxWidth="lg">
          <Box className={styles.footerContent}>
            <Box className={styles.logoContainer}>
              <Image src="/buil.png" alt="G-TREE Logo" width={50} height={50} />
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
