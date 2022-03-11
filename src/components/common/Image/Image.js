export function Image({alt='', src, loading = 'lazy'}) {
    return(
        <img alt={alt} src={src} loading={loading} />
    )
}