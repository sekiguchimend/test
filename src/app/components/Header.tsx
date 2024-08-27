// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IG-TREE</title>
      </Head>
      <header>
        <h1>IG-TREE</h1>
        <nav>
          <ul>
            <li><a href="#">事業紹介</a></li>
            <li><a href="#">会社案内</a></li>
            <li><a href="#">スタッフ募集</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>整体師を目指す方へ</h2>
          <p>スクール生募集中!</p>
          <p>整体スクールのご案内はこちら!▶▶</p>
        </section>
        <section>
          <h2>事業紹介</h2>
          <p>Business hasluction</p>
        </section>
        <section>
          <h2>TRUE SELF</h2>
          <p>TRUE SELF 整体&リラクゼーション</p>
          <p>本来の自分自身の快適な状態を取り戻すをコンセプトとし、2014年より開始した整体&リラクゼーション事業です。</p>
          <p>達しの空間に通っていただき、筋肉や青の障害の元を取りながらバランスを笑し、自然後活力をあげていくことを目指しています。</p>
          <p>★TRUE SELF ホームページはこちら</p>
        </section>
      </main>
    </div>
  );
}
