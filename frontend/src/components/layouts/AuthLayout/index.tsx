import {Navigate, Outlet} from "react-router-dom";
import classes from "./Auth.module.scss";
import {t} from "@lingui/macro";
import {useGetMe} from "../../../queries/useGetMe.ts";
import {PoweredByFooter} from "../../common/PoweredByFooter";
import {LanguageSwitcher} from "../../common/LanguageSwitcher";

const AuthLayout = () => {
    const me = useGetMe();
    if (me.isSuccess) {
        return <Navigate to={'/manage/events'}/>
    }

    return (
        <>
            <header>
                <div className={classes.languageSwitcher}>
                    <LanguageSwitcher/>
                </div>

            </header>
            <main className={classes.container}>
                <div className={classes.logo}>
                    <img src={'/logo-dark.svg'} alt={t`onetick logo`}/>
                </div>
                <div className={classes.wrapper}>
                    <Outlet/>
                    {
                        /*
                        * (c) OneTick Ltd 2024
                        *
                        * PLEASE NOTE:
                        *
                        * OneTick is licensed under the GNU Affero General Public License (AGPL) version 3.
                        *
                        * You can find the full license text at: https://github.com/HiEventsDev/onetick/blob/main/LICENCE
                        *
                        * In accordance with Section 7(b) of the AGPL, we ask that you retain the "Powered by OneTick" notice.
                        *
                        * If you wish to remove this notice, a commercial license is available at: https://onetick/licensing
                        */
                    }
                    <PoweredByFooter/>
                </div>
            </main>
        </>

    );
};

export default AuthLayout;
