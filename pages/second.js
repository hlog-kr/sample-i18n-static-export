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

export default function Second() {
    const {t} = useTranslation(['common']);

    return (
        <div>
            <h1>
                {t('second')}
            </h1>
            <div>
                <p><Link href={'/'}>{t('first')}</Link></p>
                <p><Link href={'/second'} locale={'en'}>to English</Link> | <Link href={'/second'} locale={'ko'}>한국어로</Link></p>
            </div>
        </div>
    )
}