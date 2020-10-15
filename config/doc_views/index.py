"""

 (c) Copyright Ascensio System SIA 2020
 *
 The MIT License (MIT)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

"""

import json

from django.contrib.auth import get_user_model
from django.shortcuts import render

from dokeza_2_0.users.models import User
from config.settings import base
from config.utils import docManager

User = get_user_model()

def default(request):
    context = {
        'languages': docManager.LANGUAGES,
        'preloadurl': base.DOC_SERV_PRELOADER_URL,
        'editExt': json.dumps(base.DOC_SERV_EDITED),
        'convExt': json.dumps(base.DOC_SERV_CONVERT),
        'files': docManager.getStoredFiles(request),
        'page':'users',
        'stingo':'documents'
    }
    return render(request, 'users/user_documents.html', context)