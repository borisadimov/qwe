<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

final class IndexController extends AbstractController
{

    /**
     * @Route("/", name="index_site_old", methods={"GET"})
     * @Route("/{_locale}", name="index_site", methods={"GET"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        if (!$locale = $request->get('_locale')) {
            return $this->redirectToRoute('index_site', ['_locale' => $this->getLocale($request)]);
        }
        return $this->render('page/index.html.twig');
    }

    /**
     * @Route("/privacy-policy", name="privacy_site_old", methods={"GET"})
     * @Route("/{_locale}/privacy-policy", name="privacy_site", methods={"GET"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function privacy(Request $request)
    {
        if (!$locale = $request->get('_locale')) {
            return $this->redirectToRoute('privacy_site', ['_locale' => $this->getLocale($request)]);
        }
        return $this->render('page/privacy.html.twig');
    }

    /**
     * @Route("/cookie-policy", name="cookie_site_old", methods={"GET"})
     * @Route("/{_locale}/cookie-policy", name="cookie_site", methods={"GET"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function cookie(Request $request)
    {
        if (!$locale = $request->get('_locale')) {
            return $this->redirectToRoute('cookie_site', ['_locale' => $this->getLocale($request)]);
        }
        return $this->render('page/cookie.html.twig');
    }

    /**
     * @Route("/welcomepagetestlab", name="welcomepage_lab_old", methods={"GET"})
     * @Route("/{_locale}/welcomepagetestlab", name="welcomepage_lab", methods={"GET"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function welcomepagelab(Request $request)
    {
        if (!$locale = $request->get('_locale')) {
            return $this->redirectToRoute('welcomepage_lab', ['_locale' => $this->getLocale($request)]);
        }
        return $this->render('welcomepagelab/index.html.twig');
    }

    private function getLocale(Request $request)
    {
        if (!$locale = $request->get('_locale')) {
            $locale = strtolower(str_split($_SERVER['HTTP_ACCEPT_LANGUAGE'], 2)[0]);
            if (!$locale) {
                $locale = $this->defaultLocale;
            }
        }

        return $locale;
    }
}
