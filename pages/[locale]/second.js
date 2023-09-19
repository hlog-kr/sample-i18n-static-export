import {useTranslation} from "next-i18next";
import {getStaticPaths, makeStaticProps} from "@/lib/getStatic"; // 추가

import Link from "@/components/Link"; // import 경로 변경(기존"next/link")

// 기존 내용 제거
// export async function getStaticProps({locale}) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ['common'])),
//         },
//     };
// }


const getStaticProps = makeStaticProps(['common']) // 추가
export { getStaticPaths, getStaticProps } // 추가

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
