import {IArticleModel} from '../ngrx/article-model';

const article1: IArticleModel = {
    id: 0,
    author: 'Bryan Bishop',
    title: 'Google Pixel security update',
    created: 'Oct 1, 2018, 3:27pm EDT',
    content: '',
    content_raw: '<div class="c-entry-content">\n' +
        '  <p id="rydqSu">Google released Android’s October security update today, ' +
        'bringing with it a few fixes and functional improvements for the company’s ' +
        'Pixel devices. Most notable among the patches is a fix for fast-charging' +
        ' issues which have been ' +
        '<a href="https://www.theverge.com/circuitbreaker/2018/8/14/17689040/google-pixel-fast-charge-android-pie-fix-coming-soon">' +
        'affecting 2016 Pixel and Pixel XL phones</a> since the release of Android 9 Pie. </p>\n' +
        '<p id="tfwTZg">Google acknowledged that the OS update broke fast charging ' +
        'between original Pixel devices and some third-party power adapters that ' +
        'lacked USB Power Delivery, but everything should be back to normal now. </p>\n' +
        '<p id="qT7CPX">The October update also includes improvements to Android ' +
        'Auto stability and “improved performance for certain protected media formats” ' +
        'on the Pixel 2. You can download it now by going to Settings —&gt; System —&gt; Advanced —&gt; System update.</p>\n' +
        '</div>',
};

const article2: IArticleModel = {
    id: 1,
    author: 'Nick Statt',
    title: 'Facebook names longtime executive Adam Mosseri as new head of Instagram',
    created: 'Oct 1, 2018, 3:27pm EDT',
    content: '',
    content_raw: '<div class="c-entry-content">\n' +
        '  <p id="rydqSu">Google released Android’s October security update today, ' +
        'bringing with it a few fixes and functional improvements for the company’s ' +
        'Pixel devices. Most notable among the patches is a fix for fast-charging' +
        ' issues which have been ' +
        '<a href="https://www.theverge.com/circuitbreaker/2018/8/14/17689040/google-pixel-fast-charge-android-pie-fix-coming-soon">' +
        'affecting 2016 Pixel and Pixel XL phones</a> since the release of Android 9 Pie. </p>\n' +
        '<p id="tfwTZg">Google acknowledged that the OS update broke fast charging ' +
        'between original Pixel devices and some third-party power adapters that ' +
        'lacked USB Power Delivery, but everything should be back to normal now. </p>\n' +
        '<p id="qT7CPX">The October update also includes improvements to Android ' +
        'Auto stability and “improved performance for certain protected media formats” ' +
        'on the Pixel 2. You can download it now by going to Settings —&gt; System —&gt; Advanced —&gt; System update.</p>\n' +
        '</div>',
};


const article3: IArticleModel = {
    id: 2,
    author: 'Tom Warren',
    title: 'Google’s October security update fixes the Pixel and Pixel XL’s fast-charging problems',
    content: '',
    created: 'Oct 1, 2018, 4:30pm EDT',
    content_raw: '<div class="c-entry-content">\n' +
        '    <p id="xAFnfi">Microsoft has accidentally confirmed it’s planning black Surface models. The software giant first\n' +
        '        launched its Surface RT in a black “VaporMG” variant nearly six years ago, and switched to silver options ever\n' +
        '        since. In an event listing (that has now been removed) for a Surface event in New Zealand on October 16th,\n' +
        '        Microsoft says Surface is going “back to black.”</p>\n' +
        '    <p id="3XYOZA">While the company doesn’t list the devices involved, ' +
        '            <a href="https://www.theverge.com/2018/9/30/17919952/microsoft-surface-laptop-2-surface-pro-6-specs-rumors">rumors\n' +
        '        suggest Microsoft will announce a Surface Laptop 2 and Surface Pro 6 in black variants tomorrow</a>. Both\n' +
        '        devices are expected to launch with Intel’s latest processors, and may not include modern USB-C ports. Microsoft\n' +
        '        will likely keep this black color variant for the high-end models of both the Surface Pro 6 and Surface Laptop\n' +
        '        2.</p>\n' +
        '    <p id="vQ0IBX"><em>The Verge</em> will be covering Microsoft’s Surface event live from New York City tomorrow at 4PM\n' +
        '        ET / 1PM PT. Stay tuned for all the latest news.</p>\n' +
        '</div>',
};


export const test_articles: IArticleModel[] = [
    article1, article2, article3
];
