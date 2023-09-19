import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkComponent = ({ children, skipLocaleHandling, ...rest }) => {
    const router = useRouter()
    const locale = rest.locale || router.query.locale || ''

    let href = rest.href || router.asPath
    if (href.indexOf('http') === 0) skipLocaleHandling = true
    if (locale && !skipLocaleHandling) {
        href = href
            ? `/${locale}${href}`
            : router.pathname.replace('[locale]', locale)
    }

    // legacyBehavior 없으면 오류 (13버전 이상)
    return (
        <>
            <Link href={href} legacyBehavior>
                <a {...rest}>{children}</a>
            </Link>
        </>
    )
}

export default LinkComponent
