import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";

// 이 부분이 빠지면 t('...') 동작 안함
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default function Home() {
    const {t} = useTranslation(['common']);

    return (
        <div>
            <h1>
                {t('first')}
            </h1>
            <div>
                <p><Link href={'/second'}>{t('second')}</Link></p>
                <p><Link href={'/'} locale={'en'}>to English</Link> | <Link href={'/'} locale={'ko'}>한국어로</Link></p>
            </div>
        </div>
    )
}