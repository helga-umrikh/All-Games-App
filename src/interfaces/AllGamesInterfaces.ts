interface AllGames {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    rating_top: number
    ratings: Record<string, any>
    ratings_count: number
    reviews_text_count: string
    added: number
    added_by_status: Record<string, any>
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: EsrbRating
    platforms: Platform[]
    short_screenshots: Screenshot[]
}

interface EsrbRating {
    id: number
    slug: string
    name: string
}

interface Platform {
    platform: PlatformDetail
    released_at: string
    requirements: Requirements
}

interface PlatformDetail {
    id: number
    slug: string
    name: string
}

interface Requirements {
    minimum: string
    recommended: string
}

interface Screenshot {
    id: number
    image: string
}

export type { AllGames, EsrbRating, Platform, PlatformDetail, Requirements }
