/**
 * Direct image URLs extracted from the two public Google Photos albums supplied
 * by PAM. These are hotlinks, not downloaded files: availability depends on the
 * source photos remaining publicly accessible. This is a snapshot, not a live
 * Google Photos sync. See docs/photo-gallery.md before changing the image data.
 */
const IMAGE_HOST = 'https://lh3.googleusercontent.com/pw/';

export function googlePhotoUrl(imageKey: string, width = 1600): string {
  return `${IMAGE_HOST}${imageKey}=w${width}`;
}

export type GalleryAlbum = {
  id: string;
  title: string;
  description: string;
  sourceUrl: string;
  imageKeys: string[];
};

export type GalleryPhoto = {
  id: string;
  imageKey: string;
  albumId: string;
  albumTitle: string;
  albumUrl: string;
  number: number;
  alt: string;
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'launch',
    title: 'PAM Network Launch',
    description: 'Photographs from the launch of the Papas and Mamas Network.',
    sourceUrl: 'https://photos.app.goo.gl/xWe4poxfKjtBpAgX8',
    imageKeys: [
      'AP1GczMC0xvDAH-mJ_f3uCkX1GPTtuH5uLClIvwbUOa7t9H3vR4ApaYbsOchn0bwbBn9Ijqv97oXxzBN9ABoYqsf9lX9yWOvzsiQKypfiGxPN9nWH2vxS1n71L5du0FSBrWvDtyB9eYzXtJzH22X2kZyJqfK',
      'AP1GczOOd_KS_lFaczaZYVvRCNV2mIEB89OhFUO8Tbg5cRZl0qJ-yvf3mbBPorCEL80op9JZdjPREX676mVIFYLEtF6EKbcGxZt-2kvdWX0KlPJCwi9HreE',
      'AP1GczO4cCjYv-S3lU3yZSvBPOKipB70uBxhPk7qHKxVShnidsX4DCSTYZ-9DvvRc2M7MJjbfuCILhgoFaTyAzhvE2B6HD9GONSK4uYmMuPonFbG6VU_GW2rHMdlf_ueA5LrBM_KOV5tR8JBmvY4Ip-KSZh2',
      'AP1GczPrCFNGD7mtv-OeI8HCpx57xEd1ibf5h9rMf8KkrX8Tqbx3mfXho_XvQtKP6Ggj-T0UDv3k12jCNp4Okb5AiOHVWlEOZr8EaQZ3ckQhD1NULtpc8DLxUQB5m-mHm-2sCiyEwRzK_nM5uxqCkkZ9EArV',
      'AP1GczOZCLp8J94fgGtbobcyS44rHzrvGakU5wdByq6_EIeM_N_KnQTnwBfs-SWq8R7rZAU_RiDHWHx-ejC2z_waMjXo8ocfmWu74-6KMMIRwn1QmzfTS4KNnPO3AtleppB59AsuwIPiU49N4F9PaESK9PaH',
      'AP1GczOMwgHdwBe2lRz0_0i2XeAbQmVv2C-g6oq-sGJeCNcdQ2iPEwzuFOAxIOzSYrCyGOdx8eRgEmdt5BCZEpJ1QG7P3-g6-Uq4CHXTJlOEpVbWZ9eGJEVCbQ6mIMxCKTkGzgxHxq8mRx0FeSy7WL4K5_mg',
      'AP1GczNTgWS8rragrYRatCE5I4MTRyOefQ5LhMHu-m9Ix5INmZUrxFNWkUrgmfycd3eYTWeEpH17GV1RFhJF6G7QhCS28kJ3HV0-PHhxyOGDknZGq3FdB3QfKpQ91jcUXyEaUahBloFZxgbJar9z_TZ3AIBA',
      'AP1GczMmVagSQQb1Q6FcEJrydMKQ2FzXVgJix1hiyucA_2FOek-Is9V92_LUrrLBNgArHMnWPtNsZTRPaR2SCzrHZag6G3huvmxFtK3t_6C78Uuj0cA6YwAFuKNyk5I5zvcpUjOJh3NXS4SSbeoYZ367Sz2u',
      'AP1GczM_tV8ZYk5HfTpGuPq5n4hD5zOkyqjS88Pj5ZLa0PhRISMBSydsYEKFzmBoRaU9U-EyBxPtzKTlwmV6wJw1ZV6zodQydmUDr4HgYht1TCVXOU7VN_UL4_fja4A55ZB7BrTa005C7DWOfrKxVYTghZLF',
      'AP1GczPIGL6tkwAd8eQLl4x7_oErye3baVzsaGwaXbWNjXLqyAK1kd9IC_KQtzeRynZj1P1PR0hhu629zpk7vm9_Xnh3qZHNn9bcfZBQF36qxjlSCpYAQcs',
      'AP1GczNSGi5STvFHPA248kX_3_WU2CUNdJZp3CsuwOR5RAa8IFCzoGALgIkhcGQTVr3cCcFy97mLMvv2u8cymqavqW6ek3Dc5cxXI_ZW2O5fS7pd6SfamOpcdFnoBL__8cWtzxAb69UK5G7xpzK_KOKusvDM',
      'AP1GczO0O6gj0NOprQn1rkuz-GKwwKvbEWwpsLN6SwwFRPJBsKOWwcCg6t1dTgaoPNbbHUReVmHj8E6M-Dgco0KsDglREyNfJw4Hfa5XECQB9IjlafMBy9b-qBN5t6qttAt4KYmzGcE-h3Jy7e0N0w0PZduV',
      'AP1GczNTib9IYH3Ai5W2PrJ5Tt5_uFAD05Npj5v6StiVC-0-oq9mXLnkVTQl9LQiShZwME3OX59a0bZKN1vWUrTQoRnXU8iDpbhcnwUYWJMd3lXa94egSpthgH-ZvsYS4N0kU5uA_uCJAljYGuXnF5hLGT5u',
      'AP1GczMwqmPkcwic2xFuzLj_mjBZAgYAvBatNWi6KZXw-U08vjoKjmHgI30n3xx5QOs5QSw_JpExmz_Juy61VX1pBZx9mBYGwi-mxxphLCqZ5vgGxQfybyPLt2aOVAzsmSXEZOCkbs37eTbjkIbkhGWpJowd',
      'AP1GczN2mIt8m3DV9heAsyapbHJFQbvMTHRGJys1T76hPCJZo1QZxZPnS3F3wwbzbLtGuAq9GX0uhrznLAXnNrWJ8JVZaNUhhQSYAVN42wdhp2gULdweAzSVSLqsLQjrVMlYqYo8xH4U6kQbZrlBQHeiYenm',
      'AP1GczOafmFpzCyGYsSJ6KPOmOak63Vt22-TjDM01ztSqZbXgfDb3RS0Rc9_k1DFABr4CDllHcGbzPCeGdz1BG5IkrVD-uq0KF4w7bJeAkhaMZEcNu4UyRj-EovPm6YXiYqBMhNQ4wSCPZlhbHlOXskHwSSc',
      'AP1GczOPEkkqAeZ6rKhVJy7org1g0RCL-WWOfJN17plSHCFV0vtPUMeIIzZ_qkezu3arDyY1xlEa9dnZZgOa1YaaEFVdAbE1gQQo8T5Orb8GU55gNPMjVmdCsFFlhMsPO2cWUcJbkFvQT2uoFSBz_ucOzFRv',
      'AP1GczMMqdIOIXXcpgTarXziDaNiwnQeC70HRsoWFwm1sHkX0f8UaU6ykoeALh2xR13Uudd3_2e7KQ7GEafHKBsYQb2ipaJ7KQd4vdaVoS1s_-r2KYxQOhy_5jhHFKXYHx-Vp9vwAz9h178b4n6X3Vakwcq0',
      'AP1GczO2QNyHdslEEmQJ_bRte7pfO0f3esuwn0goPX3Fie3dOaiivGTXhhdRIBQip_9yMZX6mcd4HifmYEkmwGK8yv6On9huaKqz5-6-asFVMTzvtYd_ExKlMvZDij79evAzlCtwZqCkPRx2DyPR6R6RlGru',
      'AP1GczNBxG1PQjZLXQnsNosiXa-sZdAGbZGyk_sPhsoTJnVh792m6VMhBI2fw_Jpoxvar7p6QtznSESzxgQ0A1qyAQi94RCGH2ixa2syfb7M8YWTuF8Gf4hYJZeiy3SSz08_zPjjIqXZf55fbVEBQwNVNQHF',
      'AP1GczMLRoqhQ0WhB1FRUsxh9QxQEZOV0363L2uZG9gelFexf-HbTF-x6xVppm-Brlk9NbPFMqlGCufFoPsf5_-DJGoc3A9SlCSk_WS0s8QeNWgHRKhle7csff8ekYPKKhby94rlMSuMzT-Da4cZDb5Gl3QX',
      'AP1GczP-kayToWnI1nVx_udBM3qONqurtbkkW8_kJCK_keCNA-xdCNPxGIFCOJZUDPC3EQSRweIq7sGNMl97l2pSrCyHev37IPeYo3LYLnn9LWebgI0kS7XeusJlcFaQBvKaMZVKyGFFJNjrJKbaaGTWbyVm',
      'AP1GczOIjVzpwvnHqRiwRtUqDx28G_zhXaGiKNUzg1I48Z-yyzOJcVR8Qjdibl81wATnzyfav22R6Hqgvw6ewGX1d3H9zdpQQCYwmpRcGqDdQoL1vDMzgS-cI1YpHzHVj7hlXdSWxL00-6o4gG1MyTEj7yf9',
      'AP1GczOv7VOZhAXcH9qzi8jcrpg95TXS5MDzckzgDk6iYCcuLFtyBZI2Yy5C1h-3zmUoSIXjLymD_n-JD8Q2TuLVmBSqUf5LRXNQfN9v9TALVstyH7shwNE0PkNXIa4Yr4__friLgDBAqwW7PWOyCnjK2oCW',
      'AP1GczM1EivII9Zpv-I3NQ-T1uo8jTIeJ6A639U6lTGKZVqS6NwIcf7CF9h5OQXsE1wWSPrzsn0mZvP7DaxEH9RNAn-kmU405-p_r6aoM36oyPca5H4hVTaZ7--P-ncsQlfCyOBd_Mi9i6XVNZ7EqRtho2es',
      'AP1GczP1h3oUBhnIdZcCWYqqUqf75I4li9eb2jZU_jvjTs-FqR69v7-tKI8i3Wkfrgm5Lt6bSRtWjWoD8M7PTFZ2HRHC2zC-TFgIiebSzjjbZfFNTfd-eF6yGKTcZoeMdmSaOnMgZhg_YlFZ8SCh4Em1vfOA',
      'AP1GczMry9xnYX_xo9HaLyvGTEydHe8oRy-kc5dJc6UJyLg-N31Wf_C_fklx0-G6S_CDGU3SXl5hOuTWDJhuTLenaRL42DhimkiXc8RL6C0C51Osqbpl94fQY28nVOF-4ZNvD_TCfZWK1tRMlMPbAsEA7zmq',
      'AP1GczO7c9bUpwXz8OI-GUWOkBu7ha4abUSLSXQZjyZOHX_g9m90IzunEK5aq1iO0vcCrNm2Ul9btVMNgP-_O46CJ0IjCcqdR-S-WBYV-Te0qZqWp5qnyhXWSU_mHy06l2LJ2zcFNsH1FUNG4pF2YFkOpMxh',
      'AP1GczOTSHyJHWL9QDehSyh3oJy3vrPoDVKId3S3VSYbZgkougXiTYKUYbaVDFX5kpLrXC3Lt1H9zUCyflmHTp7g68D6S0oCQMltXWjDUXWq_2guFc6Dzc2dGNYH2pGCwj0eMrmKi_kM43xBqnUxgJ3-r1Jf',
      'AP1GczOLnMvkio8QsCXMjZqoScGNQPVweEWweinb-ZuKahOwzTkBalak94qk_nboSvydVYopsFvxLNXYxQsLjES6jbvBYp2CmWwUl40VFQ6tYoYWxOl9O25ufPEq5M6vu9jcpoVUGnUBq4tK0ZMPhAzesMH1',
    ],
  },
  {
    id: 'network',
    title: 'PAM Network',
    description: 'Scenes from the life and gatherings of the PAM community.',
    sourceUrl: 'https://photos.app.goo.gl/zQwh6Dd9n4dHL4so7',
    imageKeys: [
      'AP1GczMoVMLfL7n69g2mqsOlhmUcV67EFz-h5G0nnNYtbyk6j6oYLmxroPAq9FmPm0InnCMv3N5EtkfDGVtbBGmthNP_baEym8IE6sQDqWiZ03Ak22OzYviWZI99Pa_W3NzSmn313UQjTUa6zshyk9zXabQ_',
      'AP1GczNbT6g8VI3hU2c_MzXS_cu2rtzBSaCEWxoKGkyLRKtMbsRbVUTldrhea_esA7vTOND0Mo1xoKlWMkVqtGbN9fd6oeqLk2CJ5J9d-I22G6vmWvKThOU',
      'AP1GczOLoSKEwJqQBBqhrW2ClLUGSImzieMdFXqYvFc1R6yN5j_krp4Qg0nYBc7yVCe9CWF_vr9LznO0IHx9aFk603_fAJG-_36hxiu9BI7vZJC3NF7w9Ck',
      'AP1GczMTrRyJh3251Q-O2ptP-EWlB7hSIr_IclwotTToA_R1g0IvgfkLOLp44jZtbGsEcUGkM0kDwtNS0Cc1tdmfr3P_sDG1Syp_fOG91ZTXp-A06lshnRA',
      'AP1GczPff1huSTw21vpm2smSYy3KnvIZztsai1ALCCIhkffOgMnrndhULNaUF9Y29aVf2l81o_53hGgAHUMAeDZKe1tz_punkeEsPYWEQMjh2t90IDM-tKoLaplxdy_8NuyHaDeqcCZhgdwJvS8gPtdRysdy',
      'AP1GczMr55_N_nRS3lSDM7oi7NLualW2rffDFdGnywYS2xHhlDMzBJYD2kSVUf80ulGnpg9uZak0YK5xR8hv1d9P_HAw8O51V8hOcrkuHFjJlQLY_aQzu98',
      'AP1GczOPSNDS9qQACxYQlGfiXXeVQee447QEXVPj5LYgtepn03Ly2JLXZUwAbqVBqpmPTT1u7GSYvI9P96Trj2dUj2FizsktifIUyxJ1XmpJTQ_VLMiRsC0',
      'AP1GczNkS6a4v5igVV_-UQaESEbFrCOio1ye33mRCZYpDcTYIt3f4E2mAzLwkU2ldhl3epdLkKxka_0S9iDzqgXeBWG9Ps-EEsQPt0csGzYlskcfVR9B7JQ',
      'AP1GczOg5aDsgwvEmjp6pDFy52ak7yE_jhJ4xo9TQIfdV_r66blR2ERNvtmDarfL0saF33S_RUokZQ_C0F2N7Qp7g8j-K7WT__9_SSpLjrKAcm6KHMjL4N8',
      'AP1GczNVzCE_f4ZWd81F9QGbwEvIkpDXn7Yj9maCJRIdzorQ-SwTDSJ_P3vWdMl1NeQiPqCDsLzjIJ7nCG6O5CyCdJljwen_gGXAAC9Yy2pwjjFIuf0vVlY',
      'AP1GczM-fljUe07TCsa5y54QGewbqjwdi6ws4R2ZGEOx4efGEk79T_SKzyr_KbnsdvN_nZk4G1Ju71zJ3LwkuVpuyu8nASsqoyXTxhQLHV9lbiuuNjHLCyo',
      'AP1GczMLnWxmpYj9XiCVvIlUd5_r0t1AeZS_4NDkfgbq_wAhUifPHoY9JF3Kd9v1WGaeoAwZ6aKGd6pGB5RGXOe4Bdz1ZUuy0ZakA5v6HL0445mvKiWtz5Y',
      'AP1GczPASnUoF3g1x-flj0XqfFvbewCPYzbslKmNNWPpIw946gMls9GoXeGAPNERm7v77KYjjaMA8AV85C44rAPUswJc4etFNw0_dxdgOPqTM0qfplrLy_8',
      'AP1GczPWJNh_XhM4CeqoWRC7_7bS5XCpbX_F61v6Avax20HWKhM1MMz2bt8G9hnwBEdg2WMWsyK7XkyUtQjWnvBvZdXhiQ9B7MpeobarI-R9dlEaBl_fDKk',
      'AP1GczM7GCODEY4Ctql7F5iUUhjwpN9KXNBhRj3tFp9nZUku05lXS_r50kWdn2Bv2qXx3oO1jhAiFKvf6euIQKhphS_PGStN_TkP7TIcDjfe9HCaG-jFy2w',
      'AP1GczNeRnTVUFv0hjBCjodz2ErQyG6zs-Qzzz2fxTOnf9xQsmIti4gBYZeLhfHu5-jwdPFU4DBMrMSAJNITJnu0IjKUKPPcpo1sYIdQgRXT4dIDwuszjws',
      'AP1GczOYW-4vm40E7UbqXCYTPtRSBi-sA96sPe3-_PbyuMjC3GXwmp2oORKe5hDBc5nvzOKDC-4E47Srj3AqDFEin7Kh4N17DHblWGM-XpHbE6sXniP-bfE',
      'AP1GczNaRkSCXn6oEv-s7wlsFAXeaN9_rRSDgEAlsuQME63c5uGZPCPGkK0EeyyLZ9nwiPOXcla8d69BhkpILUb5bOZ5fnnqxYPOVcrPK6wRoJTZYmgtqqM',
      'AP1GczMB8SXmpLfMKv8BbSHk6LqLCjn8LUhncOwoxLIlUstVAEAdU9Ia9iZG9t-hMHoL5bFsxDZHL2uc5UXsDEIibvPkKCQRENItCaOk2A2SgJGnWfMmG98',
      'AP1GczOFLEc1f9fdj5ubJvNIqVgRyZ6XgdUZv00Go2My0rsZnZNHOPwKkC2F5QbD32Qx852pcVOMd_kxrNUl159Yo6YjPh9YdomEFl7EsN2r5fBlb9cnZfE',
      'AP1GczM-WpUtOm3vl7zGWBnwvUhfyGVVHeZe6-7_y1jaoevWkawppsJVv9a_RDKAA8p8STP_n8E4Sr1Ufdn2Iifj9H27ezF1yncfYCWNWxSML47FeOdA9ws',
      'AP1GczN84CnBTZpgSYAQW1pQluthvR4q9vXsuOd5qizLvO0_Q5N1ekidbF-fgNGMFVIOpPQXmdogahYjRUN8hXq6iTwMHYw8UVcZ9Dbo5IsqkozU9wR14RQ',
      'AP1GczPhbaFdsXU0wivmpNbLJqyPntUjtRq8imK3zVEDU60HKllsDYGN4L-B1rhwbnocN4Lm-0pl_GlD0qPWut0Ss-jmP3qE8jrBi4J-hzMpbT4QWkMXntw',
      'AP1GczMnggZjXBXKoI0iGXL1NBMceCiyG2-kMrpqzkr19PbzQJIhpxVerICB8nt_qZ1Vcj25004iHocuidqUNlQAH6nkQSujiUliQQFQFIUuE20jXY_5WrI',
      'AP1GczM_k6-mnnoWcURMwN8F4Z-DMi0bP5jdB4kqBKpgujBLICJAg5uA4opxNtJPzruKF8WyVaY82r1jV096YrWdScZNr_bLuaaXdEmjGncZLJPQzNzo7w8',
      'AP1GczM60zy38ovipzrfUwyBczEsk4yXBIRJIExZILSaGpOZE4IYoujmDxerfQbRHQWabH59KZixuesQWWxbfNEGZ4fiRFhMMOtsj3RVNjs4zOHhoLwkIcI',
      'AP1GczMc2zvHqFqsow96oxYRHyd_61FTxJFhbbIBnoyX7MIJNK_K8Qfjt65hDFZmoPr_S3gxsJKvLSOxf15oJVWMC9sjxG4vyYzFokzrTgQl6waUbiiCUcY',
      'AP1GczN6Ye0duh3DHzwIJ4d7aqhGSc4iSSZT782tdQRqSaMrzImrtLEArEOqdGdCj_bffZieT6gZrcW7V3oPptHugivlPwjfI0l39sFAaKNd4RihLVWXQ1g',
      'AP1GczNUnPNQzlAVeZEA_XOBgZHJXEcRtHDLTfPCfCF5-kAULy5PWLAs0RCXG2Qvh68djzNE8mvPVMiy99bJ1kNZMnyhTRdYzFe3z5YdCVpHlgdBPZ4dDGs',
      'AP1GczNfcbxBxIFopeO1ReArwxItaFUrFprVcLex-AxG_mAskmXQgtcmVTt7t56zf0H4ODQI10a4CAxQgXCddkhUXUlc1oKeu2kXgnr7qYw9FbortKTfrCs',
    ],
  },
];

export const albumPhotos: Record<string, GalleryPhoto[]> = Object.fromEntries(
  galleryAlbums.map((album) => [
    album.id,
    album.imageKeys.map((imageKey, index) => ({
      id: `${album.id}-${index + 1}`,
      imageKey,
      albumId: album.id,
      albumTitle: album.title,
      albumUrl: album.sourceUrl,
      number: index + 1,
      alt: `${album.title} — photograph ${index + 1}`,
    })),
  ])
);

// Alternate albums in the combined view so both are represented immediately.
export const allGalleryPhotos: GalleryPhoto[] = Array.from(
  { length: Math.max(...galleryAlbums.map((album) => album.imageKeys.length)) },
  (_, index) => galleryAlbums.flatMap((album) => albumPhotos[album.id][index] ?? [])
).flat();

const launchPhoto = (index: number, width: number) =>
  googlePhotoUrl(albumPhotos.launch[index].imageKey, width);
const networkPhoto = (index: number, width: number) =>
  googlePhotoUrl(albumPhotos.network[index].imageKey, width);

/**
 * Curated picks from the same two albums for the rest of the site (heroes,
 * page backgrounds, cards, covers). Widths match how each slot is displayed:
 * full-screen heroes/backgrounds use 2000, large feature images 1600/1200,
 * and cards/thumbnails 800 or smaller. To change a slot, edit the index here —
 * no page files need to change.
 */
export const siteImages = {
  heroSlides: [
    launchPhoto(0, 2000),
    networkPhoto(0, 2000),
    launchPhoto(1, 2000),
    networkPhoto(1, 2000),
  ],
  homeVision: launchPhoto(2, 1600),
  aboutHeroBackground: networkPhoto(2, 2000),
  aboutHistory: launchPhoto(3, 1600),
  aboutTeam: [networkPhoto(3, 800), launchPhoto(4, 800), networkPhoto(4, 800)],
  eventsBackground: launchPhoto(5, 2000),
  eventsFeatured: networkPhoto(5, 1600),
  eventsCards: [
    launchPhoto(6, 800),
    networkPhoto(6, 800),
    launchPhoto(7, 800),
    networkPhoto(7, 800),
    launchPhoto(8, 800),
    networkPhoto(8, 800),
  ],
  sermonsBackground: networkPhoto(9, 2000),
  sermonsCards: [
    launchPhoto(9, 1200),
    networkPhoto(10, 1200),
    launchPhoto(10, 1200),
    networkPhoto(11, 1200),
    launchPhoto(11, 1200),
    networkPhoto(12, 1200),
    launchPhoto(12, 1200),
  ],
  podcastCover: launchPhoto(13, 1200),
  podcastEpisodes: [
    networkPhoto(13, 800),
    launchPhoto(14, 800),
    networkPhoto(14, 800),
    launchPhoto(15, 800),
  ],
  podcastNowPlaying: networkPhoto(15, 400),
  contactHeroBackground: launchPhoto(16, 2000),
  contactBottom: networkPhoto(16, 2000),
  donateHeroBackground: launchPhoto(17, 2000),
  fellowshipBackground: networkPhoto(17, 2000),
};
