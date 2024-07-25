# Log
* New to python backend, not React, so searched "install fast api and react"
  * Found https://testdriven.io/blog/fastapi-react/ as first result, looks ideal.
    * Uses javascript, needs typescript with `--template typescript`
  * fastapi needs ASGI (async server gateway interface), which is satisfied by uvicorn
* Installed fastapi `pip install fastapi`
* Added `C:\Users\rober\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts` to PATH variable, due to warning
* Installed uvicorn `pip install uvicorn`
* Added `backend` and `frontend` folders.
* Added minimal fastapi files to get server working
* running `python .\backend\main.py`, and opened in browser, working
* Installing create-react-app `npm install -g create-react-app`, didn't have it on my windows laptop
* setting up react in `frontend` with `npx create-react-app frontend --template typescript`
* switching to yarn, installing ui `yarn add @chakra-ui/react @emotion/react @emotion/styled emotion-theming`
* Installed littletable `pip install littletable`