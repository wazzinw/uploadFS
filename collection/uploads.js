/**
 * Created by wazzinw on 3/23/15 AD.
 */

Uploads = new FS.Collection('uploads', {
    stores: [new FS.Store.FileSystem('uploads', {path: '~/projectUploads'})]
});